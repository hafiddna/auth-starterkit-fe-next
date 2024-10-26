import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import AuthenticationCard from "@/components/partials/AuthenticationCard";
import AuthenticationCardLogo from "@/components/partials/AuthenticationCardLogo";
import Checkbox from "@/components/partials/Checkbox";
import InputError from "@/components/partials/InputError";
import InputLabel from "@/components/partials/InputLabel";
import PrimaryButton from "@/components/partials/PrimaryButton";
import TextInput from "@/components/partials/TextInput";

export const metadata: Metadata = {
    title: 'Login',
}

export default function Login() {
    const status: string = "";

    return (
        <AuthenticationCard logo={<AuthenticationCardLogo />}>
            {status && <div className="mb-4 font-medium text-sm text-green-600 dark:text-green-400">{status}</div>}

            <form>
                <div>
                    <InputLabel value="Email" htmlFor="email"/>
                    {/*TODO: Fix Component*/}
                    <TextInput
                        id="email"
                        // v-model="form.email"
                        type="email"
                        className="mt-1 block w-full"
                        required
                        autoFocus
                        autoComplete="username"
                    />
                    <InputError message="" className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel value="Password" htmlFor="password" />
                    <TextInput
                        id="password"
                        // v-model="form.password"
                        type="password"
                        className="mt-1 block w-full"
                        required
                        autoComplete="current-password"
                    />
                    <InputError message="" className="mt-2" />
                </div>

                <div className="mt-4 block">
                    <label className="flex items-center">
                        {/*TODO: Fix Component*/}
                        <Checkbox
                            // v-model="form.remember"
                            name="remember"
                        />
                        <span className="ms-2 text-sm text-gray-600 dark:text-gray-400">Remember me</span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link href="/forgot-password" className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800">
                        Forgot your password?
                    </Link>

                    {/*TODO: Fix Component*/}
                    <PrimaryButton className="ms-4">
                        Login
                    </PrimaryButton>
                </div>
            </form>
        </AuthenticationCard>
);
}
