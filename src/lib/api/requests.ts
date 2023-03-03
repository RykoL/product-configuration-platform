export type UploadEnvironmentRequestData = {
	name: string;
	environment: File;
};

export type CreateEnvironmentRequestData = {
	name: string;
	radius: number
	height: number
	assetId: number
};