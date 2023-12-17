import { useAuth } from "@clerk/nextjs";
import { Button, Link } from "@nextui-org/react";

export default function Start() {
  const { isLoaded, userId, sessionId, getToken } = useAuth();

  return (
    <div>
      {userId ? (
        <Button
          as={Link}
          color="primary"
          href="/create"
          variant="flat"
          size="lg"
        >
          Submit your Project{" "}
        </Button>
      ) : (
        <Button
          as={Link}
          color="default"
          href="auth/signup"
          variant="flat"
          size="lg"
        >
          Submit your Project
        </Button>
      )}
    </div>
  );
}
