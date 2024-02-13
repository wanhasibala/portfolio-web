import Card from "./ui/card";
export default function Offer() {
  return (
    <>
      <div className="my-10 mx-5 max-w-[1440px]  md:mx-auto md:px-5 flex justify-between">
        <div className="flex items-end  gap-2">
          <div className="">
            <svg
              width="24"
              height="172"
              viewBox="0 0 24 172"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="12.5"
                y1="0.667725"
                x2="12.5"
                y2="54.6677"
                stroke="#393737"
              />
              <path
                d="M8.27557 151.879C7.60322 151.954 7.08239 152.267 6.71307 152.816C6.33902 153.365 6.15199 154.057 6.15199 154.89C6.15199 155.487 6.24669 156.003 6.43608 156.438C6.62074 156.874 6.87642 157.212 7.20312 157.454C7.52509 157.691 7.89205 157.809 8.30398 157.809C8.64962 157.809 8.94792 157.729 9.19886 157.568C9.44981 157.402 9.66051 157.186 9.83097 156.921C9.99669 156.651 10.1364 156.363 10.25 156.055C10.3589 155.747 10.4489 155.451 10.5199 155.167L10.8892 153.747C11.0028 153.283 11.1567 152.807 11.3509 152.319C11.545 151.831 11.8007 151.379 12.1179 150.962C12.4351 150.546 12.8281 150.21 13.2969 149.954C13.7656 149.694 14.3267 149.563 14.9801 149.563C15.804 149.563 16.5355 149.776 17.1747 150.203C17.8139 150.624 18.3182 151.237 18.6875 152.042C19.0568 152.842 19.2415 153.81 19.2415 154.947C19.2415 156.036 19.0687 156.978 18.723 157.774C18.3774 158.569 17.8873 159.192 17.2528 159.641C16.6136 160.091 15.8561 160.34 14.9801 160.387V158.185C15.5057 158.143 15.9437 157.972 16.294 157.674C16.6397 157.371 16.8977 156.985 17.0682 156.516C17.2339 156.043 17.3168 155.524 17.3168 154.961C17.3168 154.341 17.2197 153.789 17.0256 153.306C16.8267 152.819 16.5521 152.435 16.2017 152.156C15.8466 151.876 15.4323 151.737 14.9588 151.737C14.5279 151.737 14.1752 151.86 13.9006 152.106C13.6259 152.347 13.3987 152.676 13.2188 153.093C13.0388 153.505 12.8802 153.971 12.7429 154.492L12.2741 156.211C11.9569 157.376 11.4905 158.299 10.875 158.981C10.2595 159.658 9.44508 159.997 8.43182 159.997C7.59375 159.997 6.86222 159.769 6.23722 159.315C5.61222 158.86 5.12689 158.245 4.78125 157.468C4.43087 156.692 4.25568 155.816 4.25568 154.84C4.25568 153.855 4.4285 152.987 4.77415 152.234C5.11979 151.476 5.59564 150.88 6.2017 150.444C6.80303 150.008 7.49432 149.781 8.27557 149.762V151.879ZM19 146.941H4.45455L4.45455 137.821H6.34375L6.34375 144.746H10.7756V138.297H12.6577V144.746H17.1108V137.736H19V146.941ZM19 134.89H4.45455V129.705C4.45455 128.578 4.64867 127.643 5.03693 126.9C5.42519 126.152 5.96259 125.593 6.64915 125.224C7.33097 124.855 8.11932 124.67 9.0142 124.67C9.90436 124.67 10.688 124.857 11.3651 125.231C12.0374 125.6 12.5606 126.159 12.9347 126.907C13.3087 127.65 13.4957 128.586 13.4957 129.712V133.64H11.6065V129.911C11.6065 129.201 11.5047 128.623 11.3011 128.178C11.0975 127.729 10.8016 127.399 10.4134 127.191C10.0251 126.983 9.55871 126.879 9.0142 126.879C8.46496 126.879 7.98911 126.985 7.58665 127.198C7.18419 127.407 6.87642 127.736 6.66335 128.185C6.44555 128.631 6.33665 129.215 6.33665 129.94V132.695H19V134.89ZM12.4375 127.71L19 124.116V126.616L12.4375 130.139V127.71ZM4.45455 121.08L16.3011 117.031V116.868L4.45455 112.82L4.45455 110.448L19 115.682V118.217L4.45455 123.452V121.08ZM4.45455 106.152H19V108.347H4.45455V106.152ZM9.18466 90.8755V93.0914C8.71117 93.1766 8.29451 93.3352 7.93466 93.5672C7.57481 93.7992 7.26941 94.0833 7.01847 94.4195C6.76752 94.7557 6.57812 95.1321 6.45028 95.5488C6.32244 95.9607 6.25852 96.3987 6.25852 96.8627C6.25852 97.7007 6.46922 98.4512 6.89063 99.1141C7.31203 99.7722 7.92992 100.293 8.74432 100.677C9.55871 101.055 10.553 101.245 11.7273 101.245C12.911 101.245 13.91 101.055 14.7244 100.677C15.5388 100.293 16.1544 99.7699 16.571 99.107C16.9877 98.4441 17.196 97.6984 17.196 96.8698C17.196 96.4105 17.1345 95.9749 17.0114 95.563C16.8835 95.1463 16.6965 94.7699 16.4503 94.4337C16.2041 94.0975 15.9034 93.8134 15.5483 93.5814C15.1884 93.3447 14.7765 93.1813 14.3125 93.0914L14.3196 90.8755C15.0346 90.9938 15.6927 91.2235 16.294 91.5644C16.8906 91.9006 17.4067 92.3338 17.8423 92.8641C18.2732 93.3897 18.607 93.991 18.8438 94.6681C19.0805 95.3452 19.1989 96.0838 19.1989 96.884C19.1989 98.1435 18.9006 99.2656 18.304 100.25C17.7027 101.235 16.8433 102.012 15.7259 102.58C14.6084 103.143 13.2756 103.425 11.7273 103.425C10.1742 103.425 8.84138 103.141 7.72869 102.573C6.61127 102.005 5.75426 101.228 5.15767 100.243C4.55634 99.2585 4.25568 98.1387 4.25568 96.884C4.25568 96.1122 4.36695 95.3925 4.58949 94.7249C4.80729 94.0525 5.12926 93.4489 5.5554 92.9138C5.9768 92.3788 6.4929 91.9361 7.10369 91.5857C7.70975 91.2353 8.40341 90.9986 9.18466 90.8755ZM19 88.2494H4.45455L4.45455 79.1301H6.34375L6.34375 86.0548H10.7756V79.6059H12.6577V86.0548H17.1108V79.0449H19V88.2494ZM8.27557 68.2654C7.60322 68.3411 7.08239 68.6536 6.71307 69.2029C6.33902 69.7521 6.15199 70.4434 6.15199 71.2767C6.15199 71.8733 6.24669 72.3894 6.43608 72.825C6.62074 73.2606 6.87642 73.5992 7.20313 73.8407C7.52509 74.0774 7.89205 74.1958 8.30398 74.1958C8.64962 74.1958 8.94792 74.1153 9.19886 73.9543C9.44981 73.7886 9.66051 73.5731 9.83097 73.308C9.99669 73.0381 10.1364 72.7493 10.25 72.4415C10.3589 72.1338 10.4489 71.8378 10.5199 71.5537L10.8892 70.1333C11.0028 69.6693 11.1567 69.1934 11.3509 68.7057C11.545 68.218 11.8007 67.7659 12.1179 67.3492C12.4351 66.9325 12.8281 66.5963 13.2969 66.3407C13.7656 66.0802 14.3267 65.95 14.9801 65.95C15.804 65.95 16.5355 66.1631 17.1747 66.5892C17.8139 67.0106 18.3182 67.6238 18.6875 68.4287C19.0568 69.2289 19.2415 70.1972 19.2415 71.3336C19.2415 72.4226 19.0687 73.3648 18.723 74.1603C18.3774 74.9557 17.8873 75.5784 17.2528 76.0282C16.6136 76.478 15.8561 76.7266 14.9801 76.7739V74.5722C15.5057 74.5296 15.9437 74.3591 16.294 74.0608C16.6397 73.7578 16.8977 73.3719 17.0682 72.9032C17.2339 72.4297 17.3168 71.9112 17.3168 71.3478C17.3168 70.7275 17.2197 70.1759 17.0256 69.6929C16.8267 69.2052 16.5521 68.8217 16.2017 68.5424C15.8466 68.263 15.4323 68.1233 14.9588 68.1233C14.5279 68.1233 14.1752 68.2464 13.9006 68.4927C13.6259 68.7341 13.3987 69.0632 13.2188 69.4799C13.0388 69.8918 12.8802 70.3582 12.7429 70.879L12.2741 72.5978C11.9569 73.7625 11.4905 74.6858 10.875 75.3677C10.2595 76.0447 9.44508 76.3833 8.43182 76.3833C7.59375 76.3833 6.86222 76.156 6.23722 75.7015C5.61222 75.2469 5.12689 74.6314 4.78125 73.8549C4.43087 73.0784 4.25568 72.2024 4.25568 71.227C4.25568 70.2422 4.4285 69.3733 4.77415 68.6205C5.11979 67.8629 5.59564 67.2663 6.2017 66.8307C6.80303 66.3951 7.49432 66.1678 8.27557 66.1489V68.2654Z"
                fill="#393737"
              />
            </svg>
          </div>

          <div className="text-heading-3 md:text-6xl font-medium lg:max-w-[50vw] text-secondary-800 self-start">
            We offer a wide range of design services
          </div>
        </div>
      </div>
      <div className="flex mx-5 md:mx-auto max-w-[1440px] md:px-5 gap-5 overflow-auto my-20">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
