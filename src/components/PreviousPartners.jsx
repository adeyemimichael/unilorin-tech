import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

const PreviousPartners = () => {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPartners();
  }, []);

  const fetchPartners = async () => {
    try {
      const { data, error } = await supabase
        .from('previous_partners')
        .select('*')
        .order('display_order', { ascending: true })
        .order('year', { ascending: false });

      if (error) throw error;

      setPartners(data || []);
    } catch (err) {
      console.error('Error fetching previous partners:', err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section id="previous-partners" className="w-full bg-white py-16 md:py-24 px-4 font-brico">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-black/60 font-medium text-sm">Loading previous partners...</p>
        </div>
      </section>
    );
  }

  if (partners.length === 0) {
    return null;
  }

  return (
    <section id="previous-partners" className="w-full bg-white py-16 md:py-24 px-4 font-brico">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          {/* <div className="inline-block bg-black text-white border-2 border-black px-4 py-1 text-xs font-extrabold uppercase tracking-widest mb-4">
            Our Partners
          </div> */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black uppercase tracking-tight">
           Our Previous Sponsors & Partners
          </h2>
          <p className="text-black/70 font-medium text-sm md:text-base mt-4 max-w-2xl mx-auto">
            Proud to have collaborated with these amazing organizations in previous editions of UTS.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-10">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white p-6 flex flex-col items-center justify-center transition-all duration-300"
            >
              {/* Partner Logo */}
              <div className="w-full h-32 md:h-40 lg:h-48 flex items-center justify-center">
                <img
                  src={partner.logo_url}
                  alt={partner.name}
                  className="w-full max-h-full object-contain transition-all duration-300"
                />
              </div>
              
              {/* Partner Name */}
              <h3 className="text-xs font-bold text-black text-center uppercase">
                {partner.name}
              </h3>
              
              {/* Year Badge */}
              <span className="inline-block bg-[#FFD100] text-black border border-black px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider mt-2">
                {partner.year}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-12">
          <p className="text-black/60 font-medium text-sm">
            Want to partner with us?{' '}
            <a 
              href="#partners" 
              className="text-black font-bold underline hover:text-[#00ADFF] transition-colors"
            >
              Become a sponsor
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};

export default PreviousPartners;
