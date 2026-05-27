export default function Footer() {
  return (
    <footer className="border-t border-border py-12 mt-24">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-serif text-lg font-semibold text-foreground">
          Lovepreet Kaur
        </p>
        <p className="text-sm text-muted-foreground text-center">
          Technology Builder · Systems Thinker · Practical Problem Solver
        </p>
        <p className="text-xs text-muted-foreground">
          Built with intention. Shipped with purpose.
        </p>
      </div>
    </footer>
  );
}
