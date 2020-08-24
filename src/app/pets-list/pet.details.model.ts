/**
 Created by
 Aravind Sundarrajan (B00824107)
*/
export interface PetDetails {
    id: number;
    age?: number;
    gender?: string;
    description?: string;
    breed: string;
    category: string;
    color: string;
    image: string;
    pet_id: number;
    phoneno: number;
    email: string;
    pet_name: string;
    showMatchButton?: boolean;
    showRadioButton?: boolean;
}