import React, { useState, useEffect } from 'react';
function DigitalClock({time, setTime}) {
    

    // let's change the state of time after every 1 sec 
    useEffect(
        () => {
            let interval = setInterval(() => {
                setTime(new Date());
            }, 1000);

            return (() => {
                clearInterval(interval);
            })


        }, []
    );

    //let's handle day
    function day() {
        let day = time.toLocaleDateString("en-US", { weekday: "long" });
        return day;
    }

    // let's handle the today's full date

    function date() {
        let date = time.toLocaleDateString("en-US", {
            day: "2-digit",
            month: "short",
            year: "numeric"
        });

        return date;
    }



    // Let's handle Hour
    function hour() {
        let hour = time.getHours();
        hour = hour % 12 || 12;
        return (hour < 10 ? "0" : "") + hour;
    }
    // Let's handle Minute
    function minute() {
        const minute = time.getMinutes();
        return (minute < 10 ? "0" : "") + minute;
    }
    // Let's Handle Second
    function second() {
        const second = time.getSeconds();
        return (second < 10 ? "0" : "") + second;
    }

    //let's handle meridiem

    function meridiem() {
        return time.getHours() >= 12 ? "PM" : "AM";
    }


    return (
        <>
            <div className="outer-box rounded-[6px] bg-[#e73633] p-4 w-full h-auto  text-[rgba(0,0,0,0.8)]  flex items-center justify-center md:w-[600px] md:h-[350px] md:p-0">
                <div className="inner-box bg-[rgba(0,0,0,0.2)] rounded-[6px] w-full h-auto  font-semibold font-sans flex flex-col items-center justify-center gap-1 md:w-[580px] md:h-[330px] ">
                    <section className="border-b-[2px]  border-[rgba(0,0,0,0.3)] w-full h-[100px] text-3xl font-semibold flex flex-col items-end justify-end ">
                        <p>{day()}</p>
                        <p>{date()}</p>

                    </section>
                    <section className=" w-full h-[220px] flex items-center justify-center gap-1 text-8xl font-bold ">
                        <span className=' w-[130px] h-[130px] flex items-center justify-center '>{hour()}</span>:
                        <span className=' w-[130px] h-[130px] flex items-center justify-center '>{minute()}</span>:
                        <span className=' w-[130px] h-[130px] flex items-center justify-center '>{second()}</span>
                        <span className=' w-[130px] h-[130px] text-6xl flex items-center justify-center lg:text-7xl'>{meridiem()}</span>


                    </section>

                </div>
            </div>
        </>
    );
}
export default DigitalClock;