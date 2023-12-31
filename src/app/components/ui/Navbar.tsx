import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { auth, SignOutButton } from "@clerk/nextjs";

export default function App() {
  const { userId }: { userId: string | null } = auth();

  return (
    <Navbar position="static">
      <Link href="/">
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <p className="font-bold text-inherit text-white">wosa</p>
      </NavbarBrand>
      </Link>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {/* <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem> */}
      </NavbarContent>
      {userId ? (
        <>
          <SignOutButton>
            <Button color="danger">Sign out</Button>
          </SignOutButton>
        </>
      ) : (
        <>
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
              <Link href="/auth/signin">Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button
                as={Link}
                color="primary"
                href="/auth/signup"
                variant="flat"
              >
                Sign Up
              </Button>
            </NavbarItem>
          </NavbarContent>
        </>
      )}
    </Navbar>
  );
}
