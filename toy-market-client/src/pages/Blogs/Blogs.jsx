const Blogs = () => {
  return (
    <div className="lg:min-h-[59vh]">
      <div className="max-w-7xl mx-auto">
      <div className="mt-16 mb-16">
          <div className="text-center">
            <h3 className="text-4xl text-orange-500 mb-5 font-semibold">
              Blogs
            </h3>
            <p className="mb-5">
              In this section you'll find different types of web development related questions and thier solutions.
            </p>
          </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-8"
        >
          <div className="collapse-title text-xl font-medium text-orange-500">
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </div>
          <div className="collapse-content">
            <p>
              An access token is a short-lived credential used for
              authentication and authorization in API requests. It represents
              the user's authorization and is included in each request to access
              protected resources. On the other hand, a refresh token is a
              long-lived credential used to obtain a new access token when the
              current one expires. <br /> Refresh tokens are securely stored on
              the client-side and are used to maintain session persistence
              without requiring the user to re-authenticate. Access tokens
              should be stored in a secure manner, such as an HTTP-only cookie
              or local storage, while refresh tokens should be stored in a more
              secure manner, like an encrypted HTTP-only cookie or a secure
              storage mechanism. Proper handling and storage of these tokens are
              essential for security.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-4"
        >
          <div className="collapse-title text-xl font-medium  text-orange-500 ">
            Compare SQL and NoSQL databases?
          </div>
          <div className="collapse-content">
            <p>
              SQL and NoSQL databases differ in their data models, scalability
              approaches, query languages, and schema flexibility. SQL databases
              use structured tables with predefined schemas, while NoSQL
              databases offer flexibility with various data models. SQL
              databases scale vertically or horizontally, whereas NoSQL
              databases excel in horizontal scalability. SQL databases use SQL
              as a standardized query language, while NoSQL databases have
              specialized query languages. SQL databases enforce fixed schemas,
              while NoSQL databases provide schema flexibility. SQL databases
              suit complex querying and relational data, while NoSQL databases
              are ideal for scalability, speed, and handling unstructured data.
              The choice depends on specific project needs.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-4"
        >
          <div className="collapse-title text-xl font-medium text-orange-500 ">
            What is express js? What is Nest JS?
          </div>
          <div className="collapse-content">
            <p>
              Express.js is a popular web application framework for Node.js that
              simplifies the process of building robust and scalable web
              applications and APIs. It provides a minimalist, unopinionated
              approach, allowing developers to customize and structure their
              applications according to their specific needs. <br />
              NestJS, on the other hand, is a framework for building efficient,
              scalable, and modular server-side applications. It is built with
              TypeScript and heavily inspired by Angular's architecture. NestJS
              provides a powerful set of features, including dependency
              injection, decorators, modules, and a modular folder structure,
              which makes it suitable for building complex enterprise-level
              applications. <br />
              In short, Express.js is a lightweight and flexible framework for
              building web applications in Node.js, while NestJS is a
              TypeScript-based framework that follows a modular and scalable
              architecture, ideal for building server-side applications. Both
              frameworks have their strengths and can be chosen based on the
              project's requirements and developer preferences.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box  mt-4"
        >
          <div className="collapse-title text-xl font-medium text-orange-500">
            What is MongoDB aggregate and how does it work?
          </div>
          <div className="collapse-content">
            <p>
              MongoDB aggregation is a powerful framework that enables data
              processing and analysis on the database server side. It allows
              developers to perform complex operations, including filtering,
              grouping, sorting, joining, and aggregating data from one or more
              collections. Aggregation pipelines in MongoDB consist of multiple
              stages that transform and manipulate the data as it flows through
              each stage. Each stage performs specific operations, such as
              matching documents, grouping data, projecting fields, and applying
              various data transformations. Aggregation pipelines can be
              customized to meet specific requirements, making it a versatile
              tool for data analysis and reporting in MongoDB.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Blogs;
