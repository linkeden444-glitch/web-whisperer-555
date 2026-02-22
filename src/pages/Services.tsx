import Layout from "@/components/Layout";

const Services = () => {
  const services = [
    { id: 1, category: "Instagram", name: "Instagram Followers [Real]", rate: "$2.50", minOrder: 100, maxOrder: 50000 },
    { id: 2, category: "Instagram", name: "Instagram Likes [Instant]", rate: "$1.20", minOrder: 50, maxOrder: 100000 },
    { id: 3, category: "YouTube", name: "YouTube Views [High Retention]", rate: "$3.00", minOrder: 500, maxOrder: 1000000 },
    { id: 4, category: "YouTube", name: "YouTube Subscribers", rate: "$5.00", minOrder: 100, maxOrder: 50000 },
    { id: 5, category: "TikTok", name: "TikTok Followers", rate: "$2.00", minOrder: 100, maxOrder: 100000 },
    { id: 6, category: "TikTok", name: "TikTok Likes", rate: "$0.80", minOrder: 50, maxOrder: 500000 },
    { id: 7, category: "Facebook", name: "Facebook Page Likes", rate: "$3.50", minOrder: 100, maxOrder: 50000 },
    { id: 8, category: "Twitter", name: "Twitter Followers", rate: "$2.80", minOrder: 100, maxOrder: 100000 },
  ];

  return (
    <Layout>
      <div className="w-full max-w-4xl bg-card rounded-lg shadow-lg p-6 relative z-10">
        <h2 className="text-2xl font-bold text-center text-link mb-6">Our Services</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="px-4 py-3 text-left">ID</th>
                <th className="px-4 py-3 text-left">Category</th>
                <th className="px-4 py-3 text-left">Service</th>
                <th className="px-4 py-3 text-left">Rate per 1K</th>
                <th className="px-4 py-3 text-left">Min</th>
                <th className="px-4 py-3 text-left">Max</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service, i) => (
                <tr key={service.id} className={i % 2 === 0 ? "bg-card" : "bg-muted"}>
                  <td className="px-4 py-3">{service.id}</td>
                  <td className="px-4 py-3 font-medium">{service.category}</td>
                  <td className="px-4 py-3">{service.name}</td>
                  <td className="px-4 py-3 font-semibold text-primary">{service.rate}</td>
                  <td className="px-4 py-3">{service.minOrder.toLocaleString()}</td>
                  <td className="px-4 py-3">{service.maxOrder.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
