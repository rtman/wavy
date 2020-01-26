#!/bin/sh
# PWD is ../

# creates the config.env.ts file
# also sets up the native XCode env files used by ReactNativeConfig

TARGET_ENV=".env"
RNCDIR="./node_modules/react-native-config/ios"

# use ENVFILE environemnt variable for env file name if specified

if [ ! -z "$ENVFILE" ]; then
  TARGET_ENV=$ENVFILE
fi

# provide a default .env file from .env.public if there isn't one

if [ ! -f ".env" ]; then
  echo "[SCRIPT build-env.sh] Warning: No .env file found... Copied .env.public to .env!"
  cp .env.public "$TARGET_ENV"
fi

echo "[SCRIPT build-env.sh] Building environment config"
echo "[SCRIPT build-env.sh] Using $TARGET_ENV"

# Used by XCode build-env target - when called by XCode $SYMROOT is set

if [ ! -z "$SYMROOT" ]; then
  mkdir -p $SYMROOT

  # Build dotenv
  cd $RNCDIR
  ./ReactNativeConfig/BuildDotenvConfig.ruby
  cd -

  # Copy generated dotenv files to node_modules directory
  cp "$BUILD_DIR/GeneratedInfoPlistDotEnv.h" "$RNCDIR/ReactNativeConfig/GeneratedInfoPlistDotEnv.h"
  cp "$SYMROOT/GeneratedDotEnv.m" "$RNCDIR/ReactNativeConfig/GeneratedDotEnv.m"
  echo "Copied GeneratedInfoPlistDotEnv.h and GeneratedDotEnv.m to $RNCDIR"
fi

# Generate dynamic environment config.env.js for development
JSON="export const configEnv = {$(cat $TARGET_ENV | egrep "^[A-Za-z]+" | sed 's/\"/\\\"/g' | sed -n 's|\(.*\)=\(.*\)$|"\1":"\2",|p' | sed 's|\\\"||g') \"generatedAt\": \"$(date '+%FT%T')\" }"

echo "JSON = $JSON"

echo "[SCRIPT build-env.sh] Generating ./src/config.env.ts"
echo $JSON > ./src/config.env.ts

echo "[SCRIPT build-env.sh] Linting ./src/config.env.ts"
tslint './src/config.env.ts' --fix

# Build config
echo "[SCRIPT build-env.sh] Config built successfully"
