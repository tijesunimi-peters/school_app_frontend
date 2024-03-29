import { PictureModel } from "../services/picture.model";

export class NewSchoolModel {
	constructor(
		public lga: string,
		public fee: string,
		public zip: string,
		public city: string,
		public name: string,
		public state: string,
		public country: string,
		public owned_by: string,
		public currency: string,
		public latitude: number,
		public no_of_bus: number,
		public longitude: number,
		public school_type: string,
		public all_property: any[],
		public street_address: string,
		public no_of_students: number,
		public no_of_buildings: number,
		public payment_interval: string,
		public school_condition: string,
		public no_of_classrooms: number,
		public video_link?: string,
		public pictures_attributes?: PictureModel[],
		public school_size?: string
	) {}
}
