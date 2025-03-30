const Accordeon = () => {
    return ( 
        <div className="border border-emerald-300 shadow rounded-lg overflow-hidden">
          <input type="checkbox" id="item1" className="peer/item1 hidden" />
          <label
            htmlFor="item1"
            className="block font-bold md:text-xl cursor-pointer p-4 bg-gray-200 peer-checked/item1:bg-emerald-600  peer-checked/item1:text-white"
          >
          واردات کالا چقدر طول می‌کشد؟
          </label>
          <div className="overflow-hidden max-h-0 peer-checked/item1:max-h-64 md:peer-checked/item1:max-h-56 transition-all duration-300">
            <p className="p-4">مدت زمان واردات بسته به کشور مبدا متفاوت است:</p>
            <div className="flex flex-col gap-4 p-4 pr-7">
              <p>چین: ۸ تا ۱۰ هفته (دریایی)</p>
              <p>دبی: ۲ تا ۳ هفته</p>
              <p>هند: ۳ تا ۴ هفته</p>
              <p>حمل هوایی: ۱۰ تا ۱۲ روز</p>
            </div>
          </div>
        </div>
     );
}
 
export default Accordeon;