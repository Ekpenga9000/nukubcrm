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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

const Form = () => {
  return (
    <section>
      <h1 className="text-center mb-8 text-lg font-semibold md:text-2xl">
        Login
      </h1>
      <Tabs defaultValue="account" className="w-full md:w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="user">Employee</TabsTrigger>
          <TabsTrigger value="admin">Admin</TabsTrigger>
        </TabsList>
        <TabsContent value="user">
          <Card>
            <CardHeader>
              <CardTitle>User Account</CardTitle>
              <CardDescription>Log into your user account.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="email">Name</Label>
                <Input
                  id="email"
                  defaultValue="employee@organisation.com"
                  type="email"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
            </CardContent>
            <CardFooter className="grid grid-cols-1 justify-center gap-4">
              <Button className="flex w-full">Login</Button>
              <Link href="/" className="text-center">
                Go Home
              </Link>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="admin">
          <Card>
            <CardHeader>
              <CardTitle>Admin Account</CardTitle>
              <CardDescription>Login as an organisation admin.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="admin_email">Email</Label>
                <Input
                  id="admin_email"
                  defaultValue={"admin@organisation.com"}
                  type="email"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="admin_password">Password</Label>
                <Input id="admin_password" type="password" />
              </div>
            </CardContent>
            <CardFooter className="grid grid-cols-1 justify-center gap-4">
              <Button className="flex w-full">Login</Button>
              <Link href="/" className="text-center">
                Go Home
              </Link>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default Form;
