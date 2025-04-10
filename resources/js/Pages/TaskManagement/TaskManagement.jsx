import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function TaskManagement() {
    return (
        <AuthenticatedLayout>
            <Head title="Task Management" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Task Management</div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}