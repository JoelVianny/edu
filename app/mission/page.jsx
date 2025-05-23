import Link from "next/link";

export default function Mission() {
  return (
    <>
      <div className="bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto py-16 px-4 justify-center items-center">
          <h2 className="text-slate-900 md:text-4xl text-3xl font-bold text-center mb-16">
            What We Do ?
          </h2>
          <h3 className=" m-10  py-5 text-center ">
            At EduFree, we specialize in guiding international students through
            every step of their journey to study in Russia. Our dedicated team
            has helped students from around the world realize their dream of
            studying abroad. We are proud to have a 100% success rate for Master
            and PhD scholarships.
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-md:max-w-md mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="p-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#007bff"
                  className="w-8 mb-6"
                  viewBox="0 0 512.001 512.001"
                >
                  <path
                    d="M271.029 0c-33.091 0-61 27.909-61 61s27.909 61 61 61 60-27.909 60-61-26.909-61-60-61zm66.592 122c-16.485 18.279-40.096 30-66.592 30-26.496 0-51.107-11.721-67.592-30-14.392 15.959-23.408 36.866-23.408 60v15c0 8.291 6.709 15 15 15h151c8.291 0 15-6.709 15-15v-15c0-23.134-9.016-44.041-23.408-60zM144.946 460.404 68.505 307.149c-7.381-14.799-25.345-20.834-40.162-13.493l-19.979 9.897c-7.439 3.689-10.466 12.73-6.753 20.156l90 180c3.701 7.423 12.704 10.377 20.083 6.738l19.722-9.771c14.875-7.368 20.938-25.417 13.53-40.272zM499.73 247.7c-12.301-9-29.401-7.2-39.6 3.9l-82 100.8c-5.7 6-16.5 9.6-22.2 9.6h-69.901c-8.401 0-15-6.599-15-15s6.599-15 15-15h60c16.5 0 30-13.5 30-30s-13.5-30-30-30h-78.6c-7.476 0-11.204-4.741-17.1-9.901-23.209-20.885-57.949-30.947-93.119-22.795-19.528 4.526-32.697 12.415-46.053 22.993l-.445-.361-21.696 19.094L174.28 452h171.749c28.2 0 55.201-13.5 72.001-36l87.999-126c9.9-13.201 7.2-32.399-6.299-42.3z"
                    data-original="#000000"
                  />
                </svg>
                <h3 className="text-slate-900 text-lg font-semibold mb-3">
                  Global Search
                </h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                  Connect students with top Russian universities
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="p-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#007bff"
                  className="w-8 mb-6"
                  viewBox="0 0 504.69 504.69"
                >
                  <path
                    d="M252.343 262.673c-49.32 0-89.447-40.127-89.447-89.447s40.127-89.447 89.447-89.447 89.447 40.127 89.447 89.447-40.121 89.447-89.447 89.447zm0-158.235c-37.926 0-68.787 30.861-68.787 68.787s30.861 68.787 68.787 68.787 68.787-30.861 68.787-68.787-30.855-68.787-68.787-68.787z"
                    data-original="#000000"
                  />
                  <path
                    d="M391.787 405.309c-5.645 0-10.253-4.54-10.325-10.201-.883-70.306-58.819-127.503-129.15-127.503-49.264 0-93.543 27.405-115.561 71.52-8.724 17.473-13.269 36.31-13.517 55.988-.072 5.702-4.757 10.273-10.459 10.201s-10.273-4.757-10.201-10.459c.289-22.814 5.568-44.667 15.691-64.955 25.541-51.164 76.907-82.95 134.047-82.95 81.581 0 148.788 66.349 149.81 147.905.072 5.702-4.494 10.392-10.201 10.459-.046-.005-.087-.005-.134-.005z"
                    data-original="#000000"
                  />
                  <path
                    d="M252.343 463.751c-116.569 0-211.408-94.834-211.408-211.408 0-116.569 94.839-211.408 211.408-211.408 116.574 0 211.408 94.839 211.408 211.408 0 116.574-94.834 211.408-211.408 211.408zm0-402.156c-105.18 0-190.748 85.568-190.748 190.748s85.568 190.748 190.748 190.748 190.748-85.568 190.748-190.748S357.523 61.595 252.343 61.595zM71.827 90.07 14.356 32.599c-4.034-4.034-4.034-10.573 0-14.607 4.029-4.034 10.573-4.034 14.607 0l57.466 57.471c4.034 4.034 3.951 10.49 0 14.607-3.792 3.951-11.039 3.698-14.602 0z"
                    data-original="#000000"
                  />
                  <path
                    d="M14.717 92.254a10.332 10.332 0 0 1-10.299-9.653L.023 15.751a10.317 10.317 0 0 1 2.929-7.908 10.2 10.2 0 0 1 7.851-3.089L77.56 7.796c5.697.258 10.108 5.093 9.85 10.79s-5.041 10.154-10.79 9.85l-55.224-2.521 3.641 55.327c.377 5.692-3.936 10.614-9.628 10.986a7.745 7.745 0 0 1-.692.026zm403.541-2.184c-4.256-3.796-4.034-10.573 0-14.607l58.116-58.116c4.034-4.034 10.573-4.034 14.607 0s4.034 10.573 0 14.607L432.864 90.07c-4.085 3.951-9.338 4.7-14.606 0z"
                    data-original="#000000"
                  />
                  <path
                    d="M489.974 92.254a9.85 9.85 0 0 1-.687-.021c-5.697-.372-10.01-5.294-9.633-10.986l3.641-55.327-55.224 2.515c-5.511.238-10.526-4.147-10.79-9.85-.258-5.702 4.153-10.531 9.85-10.79l66.757-3.042c2.934-.134 5.79.992 7.851 3.089s3.12 4.974 2.929 7.908l-4.401 66.85c-.361 5.465-4.896 9.654-10.293 9.654zM11.711 489.339c-3.791-4.266-4.034-10.573 0-14.607l60.115-60.11c4.029-4.034 10.578-4.034 14.607 0 4.034 4.034 4.034 10.573 0 14.607l-60.115 60.11c-3.827 3.884-11.156 3.884-14.607 0z"
                    data-original="#000000"
                  />
                  <path
                    d="M10.327 499.947a10.33 10.33 0 0 1-7.376-3.104 10.312 10.312 0 0 1-2.929-7.902l4.401-66.85c.372-5.697 5.191-10.036 10.986-9.633 5.692.377 10.005 5.294 9.628 10.986l-3.641 55.332 55.224-2.515c5.645-.191 10.531 4.153 10.79 9.85.258 5.697-4.153 10.526-9.85 10.79l-66.763 3.037c-.155.004-.31.009-.47.009zm465.639-13.01-57.708-57.708c-4.034-4.034-4.034-10.573 0-14.607s10.573-4.034 14.607 0l57.708 57.708c4.034 4.034 3.962 10.5 0 14.607-3.817 3.951-10.062 3.951-14.607 0z"
                    data-original="#000000"
                  />
                  <path
                    d="M494.359 499.947c-.155 0-.315-.005-.47-.01l-66.757-3.042c-5.702-.263-10.108-5.088-9.85-10.79.263-5.702 5.113-9.984 10.79-9.85l55.219 2.515-3.641-55.332c-.372-5.692 3.941-10.609 9.633-10.986 5.625-.398 10.609 3.946 10.986 9.633l4.401 66.85a10.33 10.33 0 0 1-2.929 7.902 10.323 10.323 0 0 1-7.382 3.11z"
                    data-original="#000000"
                  />
                </svg>
                <h3 className="text-slate-900 text-lg font-semibold mb-3">
                  Support
                </h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                  Support you through the entire scholarship process
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="p-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#007bff"
                  className="w-8 mb-6"
                  viewBox="0 0 682.667 682.667"
                >
                  <defs>
                    <clipPath id="a" clipPathUnits="userSpaceOnUse">
                      <path d="M0 512h512V0H0Z" data-original="#000000" />
                    </clipPath>
                  </defs>
                  <g
                    fill="none"
                    stroke="#007bff"
                    strokeMiterlimit={10}
                    strokeWidth={30}
                    clipPath="url(#a)"
                    transform="matrix(1.33 0 0 -1.33 0 682.667)"
                  >
                    <path
                      d="M226 15v60c0 16.568-13.432 30-30 30H76c-16.568 0-30-13.432-30-30V15Zm-45 165c0-24.853-20.147-45-45-45s-45 20.147-45 45 20.147 45 45 45 45-20.147 45-45ZM466 15v60c0 16.568-13.432 30-30 30H316c-16.568 0-30-13.432-30-30V15Zm-45 165c0-24.853-20.147-45-45-45s-45 20.147-45 45 20.147 45 45 45 45-20.147 45-45Zm-75 167v-50.294L286 347h-60.002L166 296.706V347h-15c-41.421 0-75 33.579-75 75s33.579 75 75 75h210c41.421 0 75-33.579 75-75s-33.579-75-75-75Zm-105 75h30m-90 0h30m90 0h30"
                      data-original="#000000"
                    />
                  </g>
                </svg>
                <h3 className="text-slate-900 text-lg font-semibold mb-3">
                  Communication
                </h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                  Guide you in building your dossier and submitting strong
                  applications
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center w-full">
            <Link href="/contact">
              <button className="mt-10 bg-[#003399] text-white hover:bg-[#003399] hover:text-white py-3 px-8 rounded-full text-lg font-medium transition duration-300 hover:shadow-lg">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
