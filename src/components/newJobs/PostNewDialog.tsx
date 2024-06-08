import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PostJobCard } from "./PostJobCard";
import { AddressCard } from "./AddressCard";

export default function PostJobDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <p className="hover:cursor-pointer hover:text-black">Post a Job</p>
      </DialogTrigger>
      <DialogContent className="max-h-[600px] sm:max-w-[600px] overflow-scroll overflow-x-hidden w-[400px]">
        <DialogHeader className="flex w-full justify-center items-center p-10">
          <DialogTitle className="uppercase text-2xl">
            Job Post Form
          </DialogTitle>
          <DialogDescription>Please fill the details below</DialogDescription>
        </DialogHeader>
        <PostJobCard />
        <AddressCard />
        <div className="flex flex-row w-full justify-between mt-10 gap-4">
          <DialogClose asChild>
            <Button className="w-full" variant={"outline"} type="button">
              Cancel
            </Button>
          </DialogClose>
          <Button className="w-full" type="submit">
            Finish
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
