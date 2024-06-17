import logoTelu from "../assets/logo/telu-logo.png";
import bgLogin from "../assets/img/bg-login.png";

function Login() {
  return (
    <>
      <div className="flex justify-center ">
        <img src={logoTelu} alt="telu-logo" className="absolute left-16 z-10 w-16 h-16" />
        <img src={bgLogin} alt="bg-login" className="w-full h-full absolute top-0 left-0 z-0 object-cover" />
        <div className="flex flex-col items-center justify-center z-20 space-y-2">
          <div className="text-center text-gray-700">
            <p className="font-bold text-4xl">Hello!</p>
            <p className="text-xl">Welcome to TelCommunity!</p>
          </div>
          <div className="flex flex-col items-center justify-center bg-[#D96C6C] w-[80vw] max-w-[500px] rounded-3xl pb-4 p-8 font-medium space-y-4">
            <div className="flex justify-between w-full space-x-2">
              <a href="/login?role=mahasiswa" className="bg-white flex-1 text-center rounded-t-2xl p-3 text-gray-700 text-lg">
                Mahasiswa
              </a>
              <a href="/login?role=dosen" className="bg-white flex-1 text-center rounded-t-2xl p-3 text-gray-700 text-lg">
                Dosen
              </a>
            </div>
            <form action="/login" method="post" className="flex flex-col items-center justify-center w-full bg-primary p-6 pt-4 rounded-3xl space-y-2">
              <p className="text-white font-medium text-xl self-start">Login</p>
              <input
                autoFocus
                name="username"
                type="text"
                placeholder="Username SSO"
                className="bg-transparent p-3 text-lg border-b-4 border-pink-400 w-full text-white focus:outline-none"
              />
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="bg-transparent p-3 text-lg border-b-4 border-pink-400 w-full text-white focus:outline-none"
              />
              <button type="submit" className="bg-white py-3 w-full rounded-lg text-primary font-medium text-lg">Masuk</button>
            </form>
          </div>
          <p className="text-xl text-gray-700 ">Butuh bantuan?</p>
        </div>
      </div>
    </>
  );
}

export default Login;
