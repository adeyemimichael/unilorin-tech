import { useState } from "react";
import { FaCloudUploadAlt, FaTimes } from "react-icons/fa";
import { supabase } from "../lib/supabaseClient";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AdminPortal = () => {
  const [activeTab, setActiveTab] = useState("highlights");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [statusMsg, setStatusMsg] = useState(null);

  // Highlights Form
  const [highlightForm, setHighlightForm] = useState({
    caption: "",
    edition_year: "2024",
    category: "Keynote",
    is_featured: true,
  });

  // Sponsors Form
  const [sponsorForm, setSponsorForm] = useState({
    company_name: "",
    tier: "Gold Sponsor",
    website_url: "",
    years_active: "2024",
    description: "",
  });

  // Speakers Form
  const [speakerForm, setSpeakerForm] = useState({
    name: "",
    speaker_role: "",
    company: "",
    category: "Keynotes",
    topic: "",
    bio: "",
    twitter_url: "",
    linkedin_url: "",
  });

  // Team Form
  const [teamForm, setTeamForm] = useState({
    name: "",
    role: "",
    department: "Executive Leads",
    bio: "",
    twitter_url: "",
    linkedin_url: "",
  });

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      console.log(" Image File Selected:", {
        fileName: selectedFile.name,
        fileSize: `${(selectedFile.size / 1024).toFixed(2)} KB`,
        fileType: selectedFile.type,
      });
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const uploadFileToSupabase = async (bucketName) => {
    if (!file) {
      console.log(" No new image file selected. Using preview/fallback URL.");
      return null;
    }

    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`;
    const filePath = `${fileName}`;

    console.log(` Starting Supabase Storage upload to bucket '${bucketName}'...`, { filePath });

    const { error: uploadError } = await supabase.storage
      .from(bucketName)
      .upload(filePath, file);

    if (uploadError) {
      console.error(" Supabase Storage upload error:", uploadError.message);
      throw new Error(`Storage upload failed: ${uploadError.message}`);
    }

    const { data: publicUrlData } = supabase.storage
      .from(bucketName)
      .getPublicUrl(filePath);

    console.log(" Supabase Storage Upload SUCCESS! Generated Public URL:", publicUrlData.publicUrl);
    return publicUrlData.publicUrl;
  };

  const handleHighlightSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    setStatusMsg(null);

    console.log(" Submitting Highlight Photo record...");

    try {
      if (!file) {
        setStatusMsg({ type: "error", text: "Please select an image file to upload." });
        setUploading(false);
        return;
      }
      const imageUrl = await uploadFileToSupabase("highlights_media");

     

      const { data, error } = await supabase.from("highlights_gallery").insert([
        {
          image_url: imageUrl,
          caption: highlightForm.caption,
          edition_year: highlightForm.edition_year,
          category: highlightForm.category,
          is_featured: highlightForm.is_featured,
        },
      ]).select();

      if (error) throw error;

      console.log("SUCCESS! Highlight recorded", data);
      setStatusMsg({ type: "success", text: "Highlight photo uploaded and added successfully!" });
      setFile(null);
      setPreview(null);
      setHighlightForm({ caption: "", edition_year: "2024", category: "Keynote", is_featured: true });
    } catch (err) {
      console.error(" Failed to insert highlight record:", err.message);
      setStatusMsg({ type: "error", text: err.message || "Failed to upload highlight." });
    } finally {
      setUploading(false);
    }
  };

  const handleSponsorSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    setStatusMsg(null);

    console.log("📝 Submitting Sponsor / Partner record...");

    try {
      if (!file) {
        setStatusMsg({ type: "error", text: "Please select a logo image to upload." });
        setUploading(false);
        return;
      }
      const logoUrl = await uploadFileToSupabase("sponsor_logos");

      console.log(" Inserting record into 'sponsors' ...");

      const { data, error } = await supabase.from("sponsors").insert([
        {
          company_name: sponsorForm.company_name,
          logo_url: logoUrl || "https://cdn.simpleicons.org/google/4285F4",
          tier: sponsorForm.tier,
          website_url: sponsorForm.website_url,
          years_active: sponsorForm.years_active.split(",").map((s) => s.trim()),
          description: sponsorForm.description,
        },
      ]).select();

      if (error) throw error;

      console.log(" SUCCESS! Sponsor record inserted", data);
      setStatusMsg({ type: "success", text: "Sponsor added successfully!" });
      setFile(null);
      setPreview(null);
      setSponsorForm({ company_name: "", tier: "Gold Sponsor", website_url: "", years_active: "2024", description: "" });
    } catch (err) {
      console.error(" Failed to insert sponsor record:", err.message);
      setStatusMsg({ type: "error", text: err.message || "Failed to add sponsor." });
    } finally {
      setUploading(false);
    }
  };

  const handleSpeakerSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    setStatusMsg(null);

    console.log(" Submitting Speaker record...");

    try {
      if (!file) {
        setStatusMsg({ type: "error", text: "Please select a speaker photo to upload." });
        setUploading(false);
        return;
      }
      const photoUrl = await uploadFileToSupabase("avatars");

      console.log(" Inserting record into 'speakers' table in Supabase...");

      const { data, error } = await supabase.from("speakers").insert([
        {
          name: speakerForm.name,
          speaker_role: speakerForm.speaker_role,
          company: speakerForm.company,
          category: speakerForm.category,
          topic: speakerForm.topic,
          bio: speakerForm.bio,
          photo_url: photoUrl,
          twitter_url: speakerForm.twitter_url,
          linkedin_url: speakerForm.linkedin_url,
        },
      ]).select();

      if (error) throw error;

      console.log(" SUCCESS! Speaker record inserted ", data);
      setStatusMsg({ type: "success", text: "Speaker added successfully!" });
      setFile(null);
      setPreview(null);
      setSpeakerForm({ name: "", speaker_role: "", company: "", category: "Keynotes", topic: "", bio: "", twitter_url: "", linkedin_url: "" });
    } catch (err) {
      console.error(" Failed to insert speaker record:", err.message);
      setStatusMsg({ type: "error", text: err.message || "Failed to add speaker." });
    } finally {
      setUploading(false);
    }
  };

  const handleTeamSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    setStatusMsg(null);

    console.log("Submitting Team Member record...");

    try {
      if (!file) {
        setStatusMsg({ type: "error", text: "Please select a team member photo to upload." });
        setUploading(false);
        return;
      }
      const photoUrl = await uploadFileToSupabase("avatars");

      console.log("💾 Inserting record into 'team_members' ...");

      const { data, error } = await supabase.from("team_members").insert([
        {
          name: teamForm.name,
          role: teamForm.role,
          department: teamForm.department,
          bio: teamForm.bio,
          photo_url: photoUrl,
          twitter_url: teamForm.twitter_url,
          linkedin_url: teamForm.linkedin_url,
        },
      ]).select();

      if (error) throw error;

      console.log(" SUCCESS! Team member record inserted into Supabase:", data);
      setStatusMsg({ type: "success", text: "Team member added successfully!" });
      setFile(null);
      setPreview(null);
      setTeamForm({ name: "", role: "", department: "Executive Leads", bio: "", twitter_url: "", linkedin_url: "" });
    } catch (err) {
      console.error(" Failed to insert team member record:", err.message);
      setStatusMsg({ type: "error", text: err.message || "Failed to add team member." });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF6EE] font-brico flex flex-col justify-between">
      <div>
        <div className="p-3 md:p-6 lg:p-8 bg-[#14382C]">
          <div className="bg-[#FAF6EE] rounded-[28px] sm:rounded-[36px] p-4 sm:p-6 border border-black/5 shadow-xl">
            <Navbar />
          </div>
        </div>

        <div className="max-w-4xl mx-auto pt-8 pb-16 px-4 sm:px-6">
          <div className="text-center mb-8">
            <div className="inline-block bg-black text-white border-2 border-black px-4 py-1 text-xs font-extrabold uppercase tracking-widest mb-3">
              UTS Organizer Portal
            </div>
            <h1
              className="text-4xl sm:text-5xl font-extrabold text-black uppercase tracking-tight"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Content &amp; Media Admin
            </h1>
            <p className="text-black/80 font-medium text-sm mt-2">
              Upload photos, add sponsors, manage speakers, and update team details directly into Supabase.
            </p>

            {/* Admin Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {[
                { id: "highlights", label: " Add Highlight Photo" },
                { id: "sponsors", label: " Add Sponsor / Partner" },
                { id: "speakers", label: " Add Speaker" },
                { id: "team", label: " Add Team Member" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setStatusMsg(null);
                    setPreview(null);
                    setFile(null);
                  }}
                  className={`px-4 py-2 text-xs font-bold uppercase border-2 border-black transition-all ${
                    activeTab === tab.id
                      ? "bg-[#FF0056] text-white shadow-[3px_3px_0px_#000]"
                      : "bg-white text-black hover:bg-[#FFD100] shadow-[2px_2px_0px_#000]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Feedback Status Alert */}
          {statusMsg && (
            <div
              className={`p-4 border-2 border-black font-bold text-xs uppercase mb-6 flex items-center justify-between shadow-[3px_3px_0px_#000] ${
                statusMsg.type === "success" ? "bg-[#00B66C] text-white" : "bg-[#FF0056] text-white"
              }`}
            >
              <span>{statusMsg.text}</span>
              <button onClick={() => setStatusMsg(null)}><FaTimes /></button>
            </div>
          )}

          {/* Upload Form Container */}
          <div className="bg-white border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_#000]">
            <div className="mb-6">
              <label className="text-xs font-extrabold uppercase text-black block mb-2">
                Upload Image File *
              </label>
              <div className="border-2 border-dashed border-black p-6 bg-[#FAF6EE] text-center flex flex-col items-center justify-center cursor-pointer relative hover:bg-white transition-colors">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                />
                {preview ? (
                  <div className="relative">
                    <img src={preview} alt="Preview" className="h-40 object-cover border-2 border-black mb-2" />
                    <span className="text-[10px] font-extrabold uppercase bg-black text-white px-2 py-1">
                      Image Selected
                    </span>
                  </div>
                ) : (
                  <>
                    <FaCloudUploadAlt className="text-4xl text-black/60 mb-2" />
                    <p className="text-xs font-extrabold uppercase text-black">Click or drag image file here</p>
                    <span className="text-[10px] text-black/60">JPG, PNG, WEBP, or SVG</span>
                  </>
                )}
              </div>
            </div>

            {/* TAB 1: HIGHLIGHTS FORM */}
            {activeTab === "highlights" && (
              <form onSubmit={handleHighlightSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="text-xs font-extrabold uppercase text-black block mb-1">Photo Caption *</label>
                  <input
                    type="text"
                    required
                    value={highlightForm.caption}
                    onChange={(e) => setHighlightForm({ ...highlightForm, caption: e.target.value })}
                    placeholder="e.g. Opening Keynote Session 2024"
                    className="w-full p-3 bg-[#FAF6EE] border-2 border-black font-bold text-sm text-black"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-extrabold uppercase text-black block mb-1">Edition Year</label>
                    <input
                      type="text"
                      value={highlightForm.edition_year}
                      onChange={(e) => setHighlightForm({ ...highlightForm, edition_year: e.target.value })}
                      placeholder="2024"
                      className="w-full p-3 bg-[#FAF6EE] border-2 border-black font-bold text-sm text-black"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-extrabold uppercase text-black block mb-1">Category Tag</label>
                    <select
                      value={highlightForm.category}
                      onChange={(e) => setHighlightForm({ ...highlightForm, category: e.target.value })}
                      className="w-full p-3 bg-[#FAF6EE] border-2 border-black font-bold text-sm text-black"
                    >
                      <option value="Keynote">Keynote</option>
                      <option value="Audience">Audience</option>
                      <option value="Workshop">Workshop</option>
                      <option value="Hackathon">Hackathon</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={uploading}
                  className="w-full py-4 bg-black text-white font-extrabold text-sm uppercase tracking-wider border-2 border-black hover:bg-[#FF0056] transition-colors shadow-[4px_4px_0px_#000] mt-2"
                >
                  {uploading ? "Uploading to Supabase..." : "Publish Highlight Photo ➔"}
                </button>
              </form>
            )}

            {/* TAB 2: SPONSORS FORM */}
            {activeTab === "sponsors" && (
              <form onSubmit={handleSponsorSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="text-xs font-extrabold uppercase text-black block mb-1">Company / Sponsor Name *</label>
                  <input
                    type="text"
                    required
                    value={sponsorForm.company_name}
                    onChange={(e) => setSponsorForm({ ...sponsorForm, company_name: e.target.value })}
                    placeholder="e.g. Stripe / Paystack"
                    className="w-full p-3 bg-[#FAF6EE] border-2 border-black font-bold text-sm text-black"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-extrabold uppercase text-black block mb-1">Sponsorship Tier</label>
                    <select
                      value={sponsorForm.tier}
                      onChange={(e) => setSponsorForm({ ...sponsorForm, tier: e.target.value })}
                      className="w-full p-3 bg-[#FAF6EE] border-2 border-black font-bold text-sm text-black"
                    >
                      <option value="Headline Sponsor">Headline Sponsor</option>
                      <option value="Gold Sponsor">Gold Sponsor</option>
                      <option value="Ecosystem Partner">Ecosystem Partner</option>
                      <option value="Official Media Partner">Official Media Partner</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-extrabold uppercase text-black block mb-1">Website URL</label>
                    <input
                      type="url"
                      value={sponsorForm.website_url}
                      onChange={(e) => setSponsorForm({ ...sponsorForm, website_url: e.target.value })}
                      placeholder="https://company.com"
                      className="w-full p-3 bg-[#FAF6EE] border-2 border-black font-bold text-sm text-black"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={uploading}
                  className="w-full py-4 bg-black text-white font-extrabold text-sm uppercase tracking-wider border-2 border-black hover:bg-[#00B66C] transition-colors shadow-[4px_4px_0px_#000] mt-2"
                >
                  {uploading ? "Saving to Supabase..." : "Add Partner / Sponsor ➔"}
                </button>
              </form>
            )}

            {/* TAB 3: SPEAKERS FORM */}
            {activeTab === "speakers" && (
              <form onSubmit={handleSpeakerSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-extrabold uppercase text-black block mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={speakerForm.name}
                      onChange={(e) => setSpeakerForm({ ...speakerForm, name: e.target.value })}
                      placeholder="Dr. Jane Doe"
                      className="w-full p-3 bg-[#FAF6EE] border-2 border-black font-bold text-sm text-black"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-extrabold uppercase text-black block mb-1">Role / Job Title *</label>
                    <input
                      type="text"
                      required
                      value={speakerForm.speaker_role}
                      onChange={(e) => setSpeakerForm({ ...speakerForm, speaker_role: e.target.value })}
                      placeholder="VP of Engineering"
                      className="w-full p-3 bg-[#FAF6EE] border-2 border-black font-bold text-sm text-black"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-extrabold uppercase text-black block mb-1">Company *</label>
                    <input
                      type="text"
                      required
                      value={speakerForm.company}
                      onChange={(e) => setSpeakerForm({ ...speakerForm, company: e.target.value })}
                      placeholder="Tech Global"
                      className="w-full p-3 bg-[#FAF6EE] border-2 border-black font-bold text-sm text-black"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-extrabold uppercase text-black block mb-1">Category</label>
                    <select
                      value={speakerForm.category}
                      onChange={(e) => setSpeakerForm({ ...speakerForm, category: e.target.value })}
                      className="w-full p-3 bg-[#FAF6EE] border-2 border-black font-bold text-sm text-black"
                    >
                      <option value="Keynotes">Keynotes</option>
                      <option value="Panelists">Panelists</option>
                      <option value="Workshop Leads">Workshop Leads</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-extrabold uppercase text-black block mb-1">Topic *</label>
                  <input
                    type="text"
                    required
                    value={speakerForm.topic}
                    onChange={(e) => setSpeakerForm({ ...speakerForm, topic: e.target.value })}
                    placeholder="Building Scalable Systems"
                    className="w-full p-3 bg-[#FAF6EE] border-2 border-black font-bold text-sm text-black"
                  />
                </div>

                <div>
                  <label className="text-xs font-extrabold uppercase text-black block mb-1">Biography</label>
                  <textarea
                    rows="2"
                    value={speakerForm.bio}
                    onChange={(e) => setSpeakerForm({ ...speakerForm, bio: e.target.value })}
                    placeholder="Brief speaker bio..."
                    className="w-full p-3 bg-[#FAF6EE] border-2 border-black font-bold text-sm text-black"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={uploading}
                  className="w-full py-4 bg-black text-white font-extrabold text-sm uppercase tracking-wider border-2 border-black hover:bg-[#00ADFF] transition-colors shadow-[4px_4px_0px_#000] mt-2"
                >
                  {uploading ? "Saving Speaker..." : "Add Speaker ➔"}
                </button>
              </form>
            )}

            {/* TAB 4: TEAM FORM */}
            {activeTab === "team" && (
              <form onSubmit={handleTeamSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-extrabold uppercase text-black block mb-1">Member Name *</label>
                    <input
                      type="text"
                      required
                      value={teamForm.name}
                      onChange={(e) => setTeamForm({ ...teamForm, name: e.target.value })}
                      placeholder="Ayobami Adeyemi"
                      className="w-full p-3 bg-[#FAF6EE] border-2 border-black font-bold text-sm text-black"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-extrabold uppercase text-black block mb-1">Role / Responsibility *</label>
                    <input
                      type="text"
                      required
                      value={teamForm.role}
                      onChange={(e) => setTeamForm({ ...teamForm, role: e.target.value })}
                      placeholder="Convener & Lead Organizer"
                      className="w-full p-3 bg-[#FAF6EE] border-2 border-black font-bold text-sm text-black"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-extrabold uppercase text-black block mb-1">Department</label>
                  <select
                    value={teamForm.department}
                    onChange={(e) => setTeamForm({ ...teamForm, department: e.target.value })}
                    className="w-full p-3 bg-[#FAF6EE] border-2 border-black font-bold text-sm text-black"
                  >
                    <option value="Executive Leads">Executive Leads</option>
                    <option value="Tech & Product">Tech &amp; Product</option>
                    <option value="Media & Branding">Media &amp; Branding</option>
                    <option value="Logistics & Operations">Logistics &amp; Operations</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-extrabold uppercase text-black block mb-1">Short Bio</label>
                  <textarea
                    rows="2"
                    value={teamForm.bio}
                    onChange={(e) => setTeamForm({ ...teamForm, bio: e.target.value })}
                    placeholder="Brief description of role..."
                    className="w-full p-3 bg-[#FAF6EE] border-2 border-black font-bold text-sm text-black"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={uploading}
                  className="w-full py-4 bg-black text-white font-extrabold text-sm uppercase tracking-wider border-2 border-black hover:bg-[#FFD100] hover:text-black transition-colors shadow-[4px_4px_0px_#000] mt-2"
                >
                  {uploading ? "Saving Team Member..." : "Add Team Member ➔"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminPortal;
