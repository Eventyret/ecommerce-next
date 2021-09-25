import { FC } from 'react';

interface Props {
  children: any;
}

const Sidebar: FC<Props> = ({ children }) => {
  const isOpen = false;
  return (
    <>
      {isOpen ? (
        <div className="fixed inset-0 z-50 h-full overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div
              onClick={() => {}}
              className="absolute inset-0 transition-opacity bg-black bg-opacity-50"
            />
            <section className="absolute inset-y-0 right-0 flex max-w-full pl-10 outline-none sm:pl-16">
              <div className="h-full md:w-screen md:max-w-md">
                <div className="flex flex-col h-full overflow-y-auto text-base shadow-xl bg-accents-1">
                  {children}
                </div>
              </div>
            </section>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Sidebar;
