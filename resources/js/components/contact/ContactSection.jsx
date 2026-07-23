import ContactInfo from './ContactInfo';
import InquiryForm from './InquiryForm';

export default function ContactSection() {
    return (
        <section className="bg-white px-[22px] py-24 md:px-14">
            <div className="mx-auto grid max-w-[1040px] grid-cols-1 gap-14 md:grid-cols-2 md:gap-16">
                <div>
                    <div className="mb-3 text-[10px] font-semibold tracking-[3px] text-brand-blue">REACH US DIRECTLY</div>
                    <h2 className="mb-8 font-heading text-[26px] font-bold tracking-[-0.5px] text-brand-ink">
                        OFFICE & SUPPORT DETAILS
                    </h2>
                    <ContactInfo />
                </div>
                <div>
                    <div className="mb-3 text-[10px] font-semibold tracking-[3px] text-brand-blue">SEND A MESSAGE</div>
                    <h2 className="mb-8 font-heading text-[26px] font-bold tracking-[-0.5px] text-brand-ink">
                        REQUEST AN INQUIRY
                    </h2>
                    <InquiryForm />
                </div>
            </div>
        </section>
    );
}
