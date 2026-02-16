export default function Rules() {
  return (
    <section className="second-container w-full flex items-center justify-center py-10 bg-secondary-color">
      <ul className="flex flex-wrap max-lg:gap-x-8 max-lg:justify-center items-center gap-x-10 text-white *:transition-all *:duration-300 *:hover:text-[#FFC300]">
        <li className="divide-before">
          <a href="#">
            <span>سیاست حفظ حریم خصوصی</span>
          </a>
        </li>
        <li className="divide-before">
          <a href="#">
            <span>شرایط و ضوابط</span>
          </a>
        </li>
        <li className="divide-before">
          <a href="#">
            <span>نقشه سایت</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>پشتیبانی</span>
          </a>
        </li>
      </ul>
    </section>
  );
}
