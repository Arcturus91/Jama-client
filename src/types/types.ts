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

type SuccessResponse = {
    status: boolean;
    data: object | Array<object>;
};

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