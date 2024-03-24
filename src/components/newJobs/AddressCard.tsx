"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Textarea } from "../ui/textarea";

export function AddressCard() {
  return (
    <Card className="w-[300px] md:w-[450px] h-[450px] flex flex-col justify-between">
      <CardHeader>
        <CardTitle>Job Location</CardTitle>
        <CardDescription>Please fill the address details</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-left">
                Address
              </Label>
              <Textarea id="username" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-left">
                Landmark
              </Label>
              <Input id="name" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-left col-span-2">
                Pincode
              </Label>
              <Input
                id="name"
                className="text-right col-span-2"
                placeholder="e.g. 175101"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label
                htmlFor="name"
                className="flex flex-col text-left col-span-2 gap-2"
              >
                <p>Required Skills</p>
                <p className="text-xs text-red-700 font-normal">
                  Please enter skills comma seperated
                </p>
              </Label>
              <Input id="skills" className="col-span-2 text-right" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button>Finish</Button>
      </CardFooter>
    </Card>
  );
}
