const Mypage = () => {
    return (
        <div>
            <div className="h-screen w-full  flex justify-center bg-slate-300 items-center relative">
                <div className="h-3/4 w-1/4 mx-auto rounded-lg shadow-lg bg-white">
                    <h4 className="text-center py-2">Unable to verify ID</h4>
                    <hr />
                    <div className="flex justify-center items-center mt-24">
                        <div className="p-10 text-center">
                            <img src="your-image-source-here.jpg" alt="Verification Image" className="mx-auto mb-4" />
                            <h2 className="text-2xl font-bold mb-4">Unable to verify your identity</h2>
                            <p>We have received your request and are reviewing your information.</p>
                        </div>
                    </div>
                </div>
                <button className="h-10 w-32 bg-slate-200 absolute bottom-6 rounded-lg ">
                    Powered by
                </button>
            </div>
        </div>
    );
};

export default Mypage;
