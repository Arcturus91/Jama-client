/* eslint-disable @typescript-eslint/no-unused-vars */
type SignInFormData = {
    email: string;
    password: string;
    type: string;
};

type LogInFormData = {
    email: string;
    password: string;
    type: string;
}

interface ErrorResponse {
    response?: {
        data?: {
            errorMessage?: string;
        };
    };
}

interface SuccessResponse<T> {
    status: true;
    data: T;
}

type ServerErrorResponse = {
    status: boolean;
    errorMessage: string;
};

interface Meal {
    id: string;
    name: string;
    description: string | null;
    price: number;
    availableAmount: number;
    imageUrl: string;
    isAvailable: boolean;
    mealStatus: string | null;
    createdAt: string;
    updatedAt: string;
    chef?: Chef;
}

interface MealDetail extends Meal {
    chef: Chef
}

interface User {
    email: string;
    password: string;
    type: string;
    profileImageUrl: string | null;
    phoneNumber: string | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    address: string;
    orders?: Order[];
}

interface Order {
    id: string;
    totalPrice: number;
    createdAt: Date;
    updatedAt: Date;
    user: User;
    orderStatus: 'onSelection' | 'required' | 'onCooking' | 'onDelivery' | 'completed';
    meal: Meal;
}


interface AuthenticationProps {
    user: User | Chef | null;
    authentication: (user: Partial<User | Chef> | null) => void;
}

interface ChefUpdateProps {
    user: Chef
}



interface MealDetailProps {
    id: string;
}

interface Chef {
    id: string;
    email: string;
    password: string;
    profileImageUrl: string | null;
    phoneNumber: string | null;
    createdAt: string;
    updatedAt: string;
    bio: string | null;
    rating: number;
    totalRatings: number;
    address: string;
    type: string;
    meals: Meal[]
}

interface NavbarProps {
    user: User | Chef | null;
    handleLogout: () => void;
}