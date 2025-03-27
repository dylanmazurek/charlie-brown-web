import Link from "next/link";

export default function Footer(){
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4 text-center">
                <p className="mb-2">Website by <Link href="https://dylanmazurek.com">Dylan Mazurek</Link></p>
                <p className="text-sm text-gray-400">
                    "Peanuts" characters created by Charles M. Schulz. Music and lyrics by Clark Gesner.
                </p>
            </div>
        </footer>
    );
}