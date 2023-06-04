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
    data: object;
};

type serverErrorResponse = {
    status: boolean;
    errorMessage: string;
};