import { Header } from "../homepage/Header";

export const SearchResult = () => {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <div className="w-full h-[1000px] flex">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2673.6699535967223!2d106.93159377657825!3d47.92342327122075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d969215f3f9493f%3A0x5bb3cc4e7abf2678!2sEmart%20Chinggis!5e0!3m2!1sen!2smn!4v1733669583225!5m2!1sen!2smn"
          //   width="600"

          loading="lazy"
          className="w-[70%] "
        ></iframe>
        <div className="w-[30%] flex flex-col  items-center gap-5 bg-[#ececf1]">
          <p className="w-full h-[80px] text-[30px] font-[700] text-center py-3 bg-white">
            Зогсоолын мэдээлэл
          </p>
          <div className="w-[90%]">
            <p className="bg-[#2963a3] text-white py-3 rounded-t-xl pl-5 text-[24px]">
              Naadam center
            </p>
            <div className="flex justify-between px-5 py-3 bg-white rounded-b-md">
              <div>
                <p>3000T</p>
                <p>1 tsagiin tarif</p>
              </div>
              <button className="px-10 text-white bg-[#2963a3] rounded-2xl">
                zahialah
              </button>
            </div>
          </div>
          <div className="w-[90%]">
            <p className="bg-[#2963a3] text-white py-3 rounded-t-xl pl-5 text-[24px]">
              Naadam center
            </p>
            <div className="flex justify-between px-5 py-3 bg-white rounded-b-md">
              <div>
                <p>3000T</p>
                <p>1 tsagiin tarif</p>
              </div>
              <button className="px-10 text-white bg-[#2963a3] rounded-2xl">
                zahialah
              </button>
            </div>
          </div>
          <div className="w-[90%]">
            <p className="bg-[#2963a3] text-white py-3 rounded-t-xl pl-5 text-[24px]">
              Naadam center
            </p>
            <div className="flex justify-between px-5 py-3 bg-white rounded-b-md">
              <div>
                <p>3000T</p>
                <p>1 tsagiin tarif</p>
              </div>
              <button className="px-10 text-white bg-[#2963a3] rounded-2xl">
                zahialah
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
