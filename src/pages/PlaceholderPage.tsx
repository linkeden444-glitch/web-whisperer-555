import Layout from "@/components/Layout";

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

const PlaceholderPage = ({ title, description }: PlaceholderPageProps) => {
  return (
    <Layout>
      <div className="w-full max-w-lg bg-card rounded-lg shadow-lg p-8 relative z-10 text-center">
        <h2 className="text-2xl font-bold text-link mb-4">{title}</h2>
        <p className="text-muted-foreground">
          {description || "This page is coming soon."}
        </p>
      </div>
    </Layout>
  );
};

export default PlaceholderPage;
