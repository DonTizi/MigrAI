import { Analytics } from '@vercel/analytics/react';

const LandingLayout = ({
    children
  }: {
    children: React.ReactNode;
  }) => {
    return (
      <main className="h-full bg-[#172447] overflow-auto">

        <div className="mx-auto max-w-screen-xl h-full w-full">
          {children}


        </div>
      </main>
     );
  }
   
  export default LandingLayout;