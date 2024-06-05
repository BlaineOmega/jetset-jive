import Team from "@/components/team";
import Sidebar from "@/components/sidebar/Sidebar";

export const metadata = {
  title: "Team",
};
const index = () => {
  return (
    <>
      {/* En Seo Page Title */}

      <Sidebar />
      {/* END LEFT MENU CONTENT */}

      {/* START RIGHT PART CONTENT */}
      <div className="rightpart">
        <div className="rightpart_in">
          <div className="tokyo_tm_section">
            <div data-aos="fade-right" data-aos-duration="1200">
              <Team />
            </div>
          </div>
        </div>
      </div>
      {/* END RIGHT PART CONTENT */}
    </>
  );
};

export default index;
