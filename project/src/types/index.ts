export interface ServiceProvider {
  id: string;
  name: string;
  profession: string;
  photo: string;
  rating: number;
  experience: number;
  description: string;
  hourlyRate: number;
  availability: boolean;
  location: string;
  contactNumber: string;
}

export interface Service {
  id: string;
  name: string;
  icon: string;
  description: string;
}