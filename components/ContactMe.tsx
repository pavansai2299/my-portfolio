export default function Contact() {
    return (
        <section id="contact" className="py-20">
            <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
            <div className="space-y-4 text-gray-300">
                <p>
                    Email: <a href="mailto:saimucherla@gmail.com" className="text-blue-500">saimucherla@gmail.com</a>
                </p>
                <p>
                    Phone: <a href="tel:+4571837235" className="text-blue-500">+45 71 83 72 35</a>
                </p>
                <p>
                    Connect Via: <a href="https://www.linkedin.com/in/pavan-sai-mucherla-45058412a/" target="_blank" rel="noopener noreferrer" className="text-blue-500">Linked In</a>
                </p>
                <p>
                    Workspace: <a href="https://github.com/pavansai2299?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-blue-500">Git Hub</a>
                </p>
            </div>
        </section>
    );
}
