export type SpecialityType = {
  id: string;
  icon: string;
  title: string;
};

export interface Doctor {
  id: string;
  email: string;
  name: string;
  profilePhoto: string;
  contactNumber: string;
  address: string;
  registrationNumber: string;
  experience: number;
  gender: "MALE" | "FEMALE" | "OTHER"; // restrict to known values
  apointmentFee: number;
  qualification: string;
  currentWorkingPlace: string;
  designation: string;
  isDeleted: boolean;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  averageRating: number;
  review: Review[]; // could be typed further if you have a Review model
  doctorSpecialties: SpecialityType[]; // could be typed further if you have a Specialty model
}

export interface Review {
  id: string;
  doctorId: string;
  patientId: string;
  appointmentId: string;
  rating: number; // DOUBLE PRECISION → number
  comment: string;
  date: string; // TIMESTAMP(3) → ISO string
  createdAt: string; // TIMESTAMP(3) → ISO string
  updatedAt: string; // TIMESTAMP(3) → ISO string
}
