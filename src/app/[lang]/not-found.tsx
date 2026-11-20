import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Link } from "@/components/ui/link";
import { Layout } from "@/components/layout/layout";

export default function NotFound() {
  return (
    <Layout>
      <section className="py-28">
        <Container className="text-center max-w-xl">
          <p className="text-sm font-bold uppercase tracking-widest text-c-primary">404</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-c-dark">Page not found</h1>
          <p className="mt-4 text-base text-c-description">
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Button asChild>
              <Link href="/">Back to Home</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/products">Explore Products</Link>
            </Button>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
