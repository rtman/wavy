export interface UploadStatus {
  progress?: number;
  error?: firebase.FirebaseError;
  complete: boolean;
  running: boolean;
  paused: boolean;
  data?: UploadCompleteData;
  task?: firebase.storage.UploadTask;
}

export interface UploadCompleteData {
  id?: string;
  fullStoragePath: string;
  downloadUrl: string;
}
