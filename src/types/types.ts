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
}


interface AuthenticationProps {
    user: User | Chef | null;
    authentication: (user: Partial<User | Chef> | null) => void;
}

interface ChefUpdateProps {
    user: Chef
}

interface MealDetail extends Meal {
    chef: {
        name: string;
        address: string;
    };
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