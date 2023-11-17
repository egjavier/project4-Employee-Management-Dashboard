import { Accordion, AccordionHeader, AccordionBody, AccordionList } from "@tremor/react";
import { useEffect, useState } from "react";

function AddEmployee() {

  const [ isBtnDisabled, setisBtnDisabled ] = useState(false)
  const [ password, setPassword ] = useState('')

  // disable generate password buttona nd style it
  const disabledBtn = () => {
    setisBtnDisabled(true)
  }
  // generate random Password
    let char = 'qwertyuiopasdfghjklzxcvbnm1234567890QWERTYUIOPASDFGHJKLZXCVBNM'
    let pw=''
    for(let i = 0; i < 8; i++) {
      let index = Math.floor(Math.random() * char.length)
      pw += char.charAt(index)
    }
    useEffect(() => {
      setPassword(pw)
    }, [])
  return (
    <div className="p-5 text-[#297EA6]">
      <AccordionList className="max-w-[1000px] mx-auto ">
        <Accordion className="border-none">
          <AccordionHeader className="bg-white">
            <p className="text-[#297EA6] font-bold md:text-lg">
              Add Employee           
            </p>
          </AccordionHeader>
          <AccordionBody className="bg-white duration-150">
            <hr />
            <form className="p-5 flex flex-col gap-5 ">
              {/* upload image */}
              <div>
                  <label htmlFor="profileImage" className="me-1 text-xs md:text-sm font-semibold text-[#297EA6]">Image: </label>
                  <input  name="profileImage" id="profileImage" 
                          type="file" 
                          placeholder="Doe"
                          // required
                          className="placeholder:italic placeholder:indent-2 
                                    border outline-neutral-700 rounded-sm
                                    text-xs md:text-sm indent-2 text-[#297EA6] py-1"
                  />                
              </div>
              {/* name */}
              <div className="flex flex-col md:flex-row gap-2 md:gap-5 justify-start items-start">
                  <div>
                  <label htmlFor="lastname" className="me-1 text-xs md:text-sm font-semibold text-[#297EA6]">Last Name:</label>
                  <input  name="lastname" id="lastname" 
                          type="text" 
                          placeholder="Doe"
                          required
                          className="placeholder:italic placeholder:indent-2 
                                    border outline-neutral-700 rounded-sm
                                    text-xs md:text-sm indent-2  py-1"
                  />                
                </div>
                <div>
                  <label htmlFor="firstname" className="me-1 text-xs md:text-sm font-semibold text-[#297EA6]">First Name:</label>
                  <input  name="firstname" id="firstname" 
                          type="text" 
                          placeholder="John"
                          required
                          className="placeholder:italic placeholder:indent-2 
                                    border outline-neutral-700 rounded-sm
                                    text-xs md:text-sm indent-2 py-1"
                  />                
                </div>
              </div>
              {/* job title and department */}
              <div className="flex flex-col md:flex-row gap-2 md:gap-5 justify-start items-start">
                <div>
                <label htmlFor="jobTitle" className="me-1 text-xs md:text-sm font-semibold text-[#297EA6]">Job Title:</label>
                <input  name="jobTitle" id="jobTitle" 
                        type="text" 
                        placeholder="Full Stack Developer"
                        required
                        className="placeholder:italic placeholder:indent-2 
                                  border outline-neutral-700 rounded-sm
                                  text-xs md:text-sm indent-2 py-1"
                />                
                </div>
                <div>
                  <label htmlFor="department" className="me-1 text-xs md:text-sm font-semibold text-[#297EA6]">Department:</label>
                  <input  name="department" id="department" 
                          type="text" 
                          placeholder="Web Development"
                          required
                          className="placeholder:italic placeholder:indent-2 
                                    border outline-neutral-700 rounded-sm
                                    text-xs md:text-sm indent-2 py-1"
                  />                
                </div>
              </div>
              {/* Email and phone */}
              <div className="flex flex-col md:flex-row gap-2 md:gap-5 justify-start items-start">
                <div>
                <label htmlFor="email" className="me-1 text-xs md:text-sm font-semibold text-[#297EA6]">Email:</label>
                <input  name="email" id="email" 
                        type="email" 
                        placeholder="johndoe@domain.com"
                        required
                        className="placeholder:italic placeholder:indent-2 
                                  border outline-neutral-700 rounded-sm
                                  text-xs md:text-sm indent-2 py-1"
                />                
                </div>
                <div>
                  <label htmlFor="phone" className="me-1 text-xs md:text-sm font-semibold text-[#297EA6] ">Phone:</label>
                  <input  name="phone" id="phone" 
                          type="number" 
                          placeholder="0987654321"
                          required
                          className="placeholder:italic placeholder:indent-2 
                                    border outline-neutral-700 rounded-sm
                                    text-xs md:text-sm indent-2 py-1"
                  />
                </div>
              </div>
              {/* Employment Status and hire date */}
              <div className="flex flex-col md:flex-row gap-2 md:gap-5 justify-start items-start">
                <div>
                <label htmlFor="employmentStatus" className="me-1 text-xs md:text-sm font-semibold text-[#297EA6]">Status</label>
                <select name="employmentStatus" 
                        id="employmentStatus"
                        required
                        className="italic border outline-neutral-700 rounded-sm
                        text-xs md:text-sm indent-1 text-neutral-400 py-1" >
                  <option value="fullTime">Full-time</option>
                  <option value="partTime">Part-time</option>
                  <option value="internship">Internship</option>
                </select>
                </div>
                <div>
                  <label htmlFor="hireDate" className="me-1 text-xs md:text-sm font-semibold text-[#297EA6]">Hire Date:</label>
                  <input  name="hireDate" id="hireDate" 
                          type="date" 
                          placeholder="Web Development"
                          required
                          className="border outline-neutral-700 rounded-sm
                                    text-xs md:text-sm indent-1 text-neutral-400 py-1"
                  />                
                </div>
              </div>  
              {/* Generate password*/}
              <div className="flex justify-start items-center gap-5">
                <button type="submit"
                        className={
                          !isBtnDisabled  ? `border border-[#297EA6] rounded-md px-3 py-1
                                             hover:scale-105 duration-150
                                            text-[#297EA6] text-xs md:text-sm`
                                          : `border border-[#999999] rounded-md px-3 py-1
                                             bg-[#cccccc] text-[#666666] text-xs md:text-sm`
                        }
                        disabled = {isBtnDisabled }
                        onClick = {disabledBtn}>
                  Generate Password
                </button>
                {
                  !isBtnDisabled ? <p className="hidden"></p>
                                  : <p className="block italic text-sm md:text-base font-semibold">{password}</p>
                }
              </div>  
              {/* submit button*/}
              <div className="text-end">
                <button className="bg-[#00101C] rounded-md px-5 py-1
                                    hover:scale-105 duration-150
                                    text-white md:text-md ">
                  Submit
                </button>
              </div>                   

            </form>
          </AccordionBody>
        </Accordion>
      </AccordionList>
    </div>
  )
}


export default AddEmployee