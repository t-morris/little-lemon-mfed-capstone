import IndoorImg from '../assets/indoor.jpg';
import AlfrescoImg from '../assets/alfresco.jpg';

export default function BookingForm({ form, onSubmit, availableTimes, dispatchAvailableTimes }) {
    const { register, handleSubmit, formState: { errors }, watch, setValue } = form;
    const selectedDate = watch("date");

    return (
        <>
            <div className="reservation-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h4>Dining Experience:</h4>
                    <div className="dining-options">
                        <label className="option-card">
                            <input
                                type="radio"
                                value="Indoor"
                                {...register("dining")}
                            />
                            <div className="option-content">
                                <img src={IndoorImg} alt="Indoor" className="dining-img" />
                            </div>
                            <span>Indoor</span>
                        </label>

                        <label className="option-card">
                            <input
                                type="radio"
                                value="Alfresco"
                                {...register("dining")}
                            />
                            <div className="option-content">
                                <img src={AlfrescoImg} alt="Alfresco" className="dining-img" />
                            </div>
                            <span>Alfresco</span>
                        </label>
                    </div>
                    <p className="error">{errors.dining?.message}</p>

                    <h4>Booking Details:</h4>
                    <div className="selectors">
                        <select {...register("people")}>
                            <option value="1">1 Person</option>
                            <option value="2">2 People</option>
                            <option value="3">3 People</option>
                            <option value="4">4 People</option>
                            <option value="5">5 People</option>
                            <option value="6">6 People</option>
                            <option value="7">7 People</option>
                            <option value="8">8 People</option>
                            <option value="9">9 People</option>
                            <option value="10">10 People</option>
                        </select>

                        <input
                            type="date"
                            {...register("date", {
                            onChange: (e) => {
                                const dateValue = e.target.value;
                                dispatchAvailableTimes({ type: "dateChanged", payload: dateValue });
                            }
                            })}
                        />

                        <select {...register("time")}>
                            {availableTimes.map((t) => (
                                <option key={t} value={t}>{t}</option>
                            ))}
                        </select>
                    </div>
                    <p className="error">{errors.people?.message}</p>
                    <p className="error">{errors.date?.message}</p>
                    <p className="error">{errors.time?.message}</p>
                    <p class="minornote">Note: For parties larger than 10 please call our friendly staff to discuss a reservation.</p>
                    <h4>Occasion:</h4>
                    <div className="selectors">
                        <select {...register("occasion")}>
                            <option value="None">None</option>
                            <option value="Birthday">Birthday</option>
                            <option value="Anniversary">Anniversary</option>
                        </select>
                    </div>


                    <h4>Book as:</h4>
                    <div className="book-as">
                    <label className="option-card small">
                        <input type="radio" value="Guest" {...register("bookingType")} />
                        <div className="option-content"><span>Guest</span></div>
                    </label>

                    <label className="option-card small">
                        <input type="radio" value="Existing Patron" {...register("bookingType")} />
                        <div className="option-content"><span>Existing Patron</span></div>
                    </label>
                </div>

                    <div className="input-group">
                    <label>First Name<span className="required">*</span></label>
                    <input type="text" {...register("firstName")} />
                    <p className="error">{errors.firstName?.message}</p>
                    </div>

                    <div className="input-group">
                    <label>Last Name<span className="required">*</span></label>
                    <input type="text" {...register("lastName")} />
                    <p className="error">{errors.lastName?.message}</p>
                    </div>

                    <div className="input-group">
                    <label>E-Mail<span className="required">*</span></label>
                    <input type="email" {...register("email")} />
                    <p className="error">{errors.email?.message}</p>
                    </div>

                    <div className="input-group">
                    <label>Phone<span className="required">*</span></label>
                    <input type="tel" {...register("phone")} />
                    <p className="error">{errors.phone?.message}</p>
                    </div>

                    <div className="payment">
                    <div className="input-group">
                        <label>Card #<span className="required">*</span></label>
                        <input type="text" placeholder="1234-5678-9123-4567" {...register("card")} />
                        <p className="error">{errors.card?.message}</p>
                    </div>
                    <div className="input-group small">
                        <label>CVC<span className="required">*</span></label>
                        <input type="text" placeholder="123" {...register("cvc")} />
                        <p className="error">{errors.cvc?.message}</p>
                    </div>
                    </div>

                    <div className="buttons"><button type="submit" className="button">Make Reservation</button></div>
                </form>
            </div>
        </>
    )
}
