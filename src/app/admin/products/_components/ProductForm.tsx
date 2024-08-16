import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

export function ProductForm() {
    return (
        <form className="space-y-6">
            <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" type="text" required/>

            </div>
        </form>
    );
}