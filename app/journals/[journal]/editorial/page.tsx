export default function ComingSoonPage() {
  return (
    <div className="max-w-4xl mx-auto text-center py-24">

      {/* Icon */}
      <div className="flex justify-center mb-8">
        <div className="w-16 h-16 rounded-full bg-[#F4A623]/10 flex items-center justify-center">
          <span className="text-2xl text-[#0A1F44]">⏳</span>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-slate-900">
        Page Coming Soon
      </h1>

      {/* Divider */}
      <div className="mt-4 w-20 h-1 mx-auto bg-gradient-to-r from-[#0A1F44] to-[#F4A623] rounded-full" />

      {/* Description */}
      <p className="mt-6 text-lg text-slate-600 leading-relaxed">
        This section is currently under development.  
        The content will be available soon.
      </p>

      {/* Secondary Text */}
      <p className="mt-3 text-sm text-slate-400">
        Please check back later for updates.
      </p>

    </div>
  );
}