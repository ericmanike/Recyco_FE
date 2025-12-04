import ResetPasswordForm from "./resetPassword";
import { Suspense } from "react";

export default function ResetPasswordSuspense() {
    return (
        <Suspense fallback={<div className='h-screen flex justify-center items-center'>Loading...</div>}>
            <ResetPasswordForm />
        </Suspense>
    );
}