"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Snowflake,
  Zap,
  Shield,
  Clock,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Thermometer,
  Wind,
  Gauge,
  Star,
  Menu,
  X,
} from "lucide-react"
import { useState, useEffect } from "react"

export default function ModernRefrigerationWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.1),transparent_50%)]"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
      </div>

      {/* Navigation */}
<nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800">
  <div className="container mx-auto px-6 py-4">
    {/* Top Nav Row */}
    <div className="flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <div className="relative">
          <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
            <Snowflake className="h-6 w-6 text-white" />
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-cyan-400 rounded-full animate-pulse" />
        </div>
        <div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            FrostTech
          </h1>
          <p className="text-xs text-slate-400">Ψυκτικά Συστήματα</p>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center space-x-8">
        <a href="#home" className="text-slate-300 hover:text-cyan-400 transition-colors relative group">
          Αρχική
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full" />
        </a>
        <a href="#services" className="text-slate-300 hover:text-cyan-400 transition-colors relative group">
          Υπηρεσίες
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full" />
        </a>
        <a href="#tech" className="text-slate-300 hover:text-cyan-400 transition-colors relative group">
          Τεχνολογία
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full" />
        </a>
        <a href="#contact" className="text-slate-300 hover:text-cyan-400 transition-colors relative group">
          Επικοινωνία
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full" />
        </a>
      </div>

      {/* Desktop Buttons */}
      <div className="hidden lg:flex items-center space-x-4">
        <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-800">
          <Phone className="h-4 w-4 mr-2" />
          210 123 4567
        </Button>
        <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0">
          Επείγον
        </Button>
      </div>

      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="sm"
        className="lg:hidden text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>
    </div>

    {/* Mobile Menu Dropdown */}
    {isMenuOpen && (
      <div className="lg:hidden mt-4 space-y-4">
        <a href="#home" className="block text-slate-300 hover:text-cyan-400 transition-colors">
          Αρχική
        </a>
        <a href="#services" className="block text-slate-300 hover:text-cyan-400 transition-colors">
          Υπηρεσίες
        </a>
        <a href="#tech" className="block text-slate-300 hover:text-cyan-400 transition-colors">
          Τεχνολογία
        </a>
        <a href="#contact" className="block text-slate-300 hover:text-cyan-400 transition-colors">
          Επικοινωνία
        </a>
        <Button variant="ghost" className="w-full text-slate-300 hover:text-white hover:bg-slate-800">
          <Phone className="h-4 w-4 mr-2" />
          210 123 4567
        </Button>
        <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0">
          Επείγον
        </Button>
      </div>
    )}
  </div>
</nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm rounded-full px-4 py-2 border border-slate-700">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm text-slate-300">Διαθέσιμοι 24/7</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="text-white">Ψυκτικά</span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Συστήματα
                  </span>
                  <br />
                  <span className="text-slate-300 text-3xl lg:text-4xl">Νέας Γενιάς</span>
                </h1>
                <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
                  Εγκατάσταση, συντήρηση και επισκευή ψυκτικών συστημάτων με τεχνολογία αιχμής και 15+ χρόνια εμπειρίας.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 group"
                >
                  Δωρεάν Εκτίμηση
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white"
                >
                  Δείτε τα Έργα μας
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">500+</div>
                  <div className="text-sm text-slate-400">Εγκαταστάσεις</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">15+</div>
                  <div className="text-sm text-slate-400">Χρόνια</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">24/7</div>
                  <div className="text-sm text-slate-400">Υποστήριξη</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px]">
                {/* Floating Cards */}
                <div className="absolute top-0 right-0 w-48 h-32 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl border border-cyan-500/30 p-4 animate-float">
                  <Thermometer className="h-8 w-8 text-cyan-400 mb-2" />
                  <div className="text-sm text-slate-300">Θερμοκρασία</div>
                  <div className="text-xl font-bold text-white">-18°C</div>
                </div>

                <div className="absolute top-20 left-0 w-44 h-28 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl border border-blue-500/30 p-4 animate-float-delayed">
                  <Wind className="h-8 w-8 text-blue-400 mb-2" />
                  <div className="text-sm text-slate-300">Ροή Αέρα</div>
                  <div className="text-xl font-bold text-white">Βέλτιστη</div>
                </div>

                <div className="absolute bottom-0 right-12 w-52 h-36 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl border border-purple-500/30 p-4 animate-float">
                  <Gauge className="h-8 w-8 text-purple-400 mb-2" />
                  <div className="text-sm text-slate-300">Απόδοση</div>
                  <div className="text-xl font-bold text-white">98.5%</div>
                </div>

                {/* Central Glow */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm rounded-full px-4 py-2 border border-slate-700 mb-6">
              <Zap className="h-4 w-4 text-cyan-400" />
              <span className="text-sm text-slate-300">Οι Υπηρεσίες μας</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-white">Ολοκληρωμένες</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Λύσεις Ψύξης
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Από την εγκατάσταση έως την συντήρηση, καλύπτουμε κάθε ανάγκη με τεχνολογία αιχμής
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <Card className="relative bg-slate-900/50 backdrop-blur-sm border-slate-700 rounded-3xl overflow-hidden group-hover:border-cyan-500/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Snowflake className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Κλιματιστικά Συστήματα</h3>
                  <p className="text-slate-400 mb-6">
                    Εγκατάσταση και συντήρηση κλιματιστικών μονάδων με τεχνολογία inverter και έξυπνο έλεγχο.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center text-slate-300">
                      <CheckCircle2 className="h-5 w-5 text-cyan-400 mr-3" />
                      Ενεργειακή κλάση A+++
                    </li>
                    <li className="flex items-center text-slate-300">
                      <CheckCircle2 className="h-5 w-5 text-cyan-400 mr-3" />
                      Έξυπνος έλεγχος
                    </li>
                    <li className="flex items-center text-slate-300">
                      <CheckCircle2 className="h-5 w-5 text-cyan-400 mr-3" />5 χρόνια εγγύηση
                    </li>
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0">
                    Μάθετε Περισσότερα
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Service 2 */}
            <div className="group relative lg:mt-12">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <Card className="relative bg-slate-900/50 backdrop-blur-sm border-slate-700 rounded-3xl overflow-hidden group-hover:border-blue-500/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Ψυκτικοί Θάλαμοι</h3>
                  <p className="text-slate-400 mb-6">
                    Σχεδιασμός και κατασκευή ψυκτικών θαλάμων για επαγγελματική χρήση με αυτοματισμούς.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center text-slate-300">
                      <CheckCircle2 className="h-5 w-5 text-blue-400 mr-3" />
                      Προσαρμοσμένες λύσεις
                    </li>
                    <li className="flex items-center text-slate-300">
                      <CheckCircle2 className="h-5 w-5 text-blue-400 mr-3" />
                      Παρακολούθηση 24/7
                    </li>
                    <li className="flex items-center text-slate-300">
                      <CheckCircle2 className="h-5 w-5 text-blue-400 mr-3" />
                      Συναγερμοί & alerts
                    </li>
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0">
                    Μάθετε Περισσότερα
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Service 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <Card className="relative bg-slate-900/50 backdrop-blur-sm border-slate-700 rounded-3xl overflow-hidden group-hover:border-purple-500/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Επείγουσα Υποστήριξη</h3>
                  <p className="text-slate-400 mb-6">
                    Άμεση ανταπόκριση για επείγουσες βλάβες με εξειδικευμένο προσωπικό διαθέσιμο 24/7.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center text-slate-300">
                      <CheckCircle2 className="h-5 w-5 text-purple-400 mr-3" />
                      Ανταπόκριση σε 30'
                    </li>
                    <li className="flex items-center text-slate-300">
                      <CheckCircle2 className="h-5 w-5 text-purple-400 mr-3" />
                      Διαθέσιμοι 24/7/365
                    </li>
                    <li className="flex items-center text-slate-300">
                      <CheckCircle2 className="h-5 w-5 text-purple-400 mr-3" />
                      Γνήσια ανταλλακτικά
                    </li>
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0">
                    Επικοινωνία Τώρα
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="tech" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm rounded-full px-4 py-2 border border-slate-700">
                <Zap className="h-4 w-4 text-cyan-400" />
                <span className="text-sm text-slate-300">Τεχνολογία Αιχμής</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold">
                <span className="text-white">Έξυπνα</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Ψυκτικά Συστήματα
                </span>
              </h2>

              <p className="text-xl text-slate-400 leading-relaxed">
                Χρησιμοποιούμε την πιο προηγμένη τεχνολογία για να σας προσφέρουμε συστήματα υψηλής απόδοσης, χαμηλής
                κατανάλωσης και μέγιστης αξιοπιστίας.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Thermometer className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">IoT Παρακολούθηση</h3>
                    <p className="text-slate-400">
                      Συστήματα με έξυπνους αισθητήρες που παρακολουθούν και ρυθμίζουν αυτόματα τη θερμοκρασία.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Wind className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Inverter Technology</h3>
                    <p className="text-slate-400">
                      Τεχνολογία inverter για 60% λιγότερη κατανάλωση ενέργειας και απόλυτη σιωπή.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Gauge className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Προγνωστική Συντήρηση</h3>
                    <p className="text-slate-400">AI αλγόριθμοι που προβλέπουν πιθανές βλάβες πριν συμβούν.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl border border-cyan-500/20 p-6">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">-25°C</div>
                    <div className="text-slate-300">Ελάχιστη Θερμοκρασία</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl border border-blue-500/20 p-6">
                    <div className="text-3xl font-bold text-blue-400 mb-2">A+++</div>
                    <div className="text-slate-300">Ενεργειακή Κλάση</div>
                  </div>
                </div>
                <div className="space-y-6 mt-12">
                  <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl border border-purple-500/20 p-6">
                    <div className="text-3xl font-bold text-purple-400 mb-2">98.5%</div>
                    <div className="text-slate-300">Απόδοση</div>
                  </div>
                  <div className="bg-gradient-to-br from-pink-500/10 to-red-500/10 backdrop-blur-sm rounded-2xl border border-pink-500/20 p-6">
                    <div className="text-3xl font-bold text-pink-400 mb-2">15+</div>
                    <div className="text-slate-300">Χρόνια Εγγύηση</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm rounded-full px-4 py-2 border border-slate-700 mb-6">
              <Star className="h-4 w-4 text-cyan-400" />
              <span className="text-sm text-slate-300">Μαρτυρίες</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Τι Λένε οι Πελάτες μας
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Μαρία Κωνσταντίνου",
                role: "Ιδιοκτήτρια Εστιατορίου",
                content:
                  "Απίστευτη εξυπηρέτηση! Εγκατέστησαν ψυκτικό θάλαμο με IoT παρακολούθηση. Τώρα ελέγχω τη θερμοκρασία από το κινητό μου.",
                gradient: "from-cyan-500/20 to-blue-500/20",
                border: "border-cyan-500/30",
              },
              {
                name: "Γιάννης Παπαδόπουλος",
                role: "Διευθυντής Ξενοδοχείου",
                content:
                  "Η τεχνολογία inverter που εγκατέστησαν μείωσε το κόστος ρεύματος κατά 40%. Εξαιρετικό αποτέλεσμα!",
                gradient: "from-blue-500/20 to-purple-500/20",
                border: "border-blue-500/30",
              },
              {
                name: "Ελένη Σταυρίδου",
                role: "Ιδιοκτήτρια Σπιτιού",
                content: "Επείγουσα βλάβη στις 2 τα ξημερώματα. Ήρθαν σε 20 λεπτά και έλυσαν το πρόβλημα. Απίστευτοι!",
                gradient: "from-purple-500/20 to-pink-500/20",
                border: "border-purple-500/30",
              },
            ].map((testimonial, index) => (
              <div key={index} className="group relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300`}
                />
                <Card
                  className={`relative bg-slate-900/50 backdrop-blur-sm border-slate-700 rounded-2xl ${testimonial.border} group-hover:${testimonial.border} transition-all duration-300`}
                >
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-slate-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-semibold text-sm">
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-sm text-slate-400">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm rounded-full px-4 py-2 border border-slate-700">
                <Phone className="h-4 w-4 text-cyan-400" />
                <span className="text-sm text-slate-300">Επικοινωνία</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold">
                <span className="text-white">Ας Μιλήσουμε</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  για το Έργο σας
                </span>
              </h2>

              <p className="text-xl text-slate-400 leading-relaxed">
                Επικοινωνήστε μαζί μας για δωρεάν εκτίμηση και συμβουλές από τους ειδικούς μας.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Τηλέφωνο</div>
                    <div className="text-slate-400">+30 210 123 4567</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Email</div>
                    <div className="text-slate-400">info@frosttech.gr</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Διεύθυνση</div>
                    <div className="text-slate-400">Κηφισίας 123, Μαρούσι</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl border border-cyan-500/20 p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Επείγουσα Υπηρεσία 24/7</h3>
                <p className="text-slate-400 mb-4">Για επείγουσες βλάβες καλέστε:</p>
                <Button className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white border-0">
                  <Phone className="h-4 w-4 mr-2" />
                  +30 694 567 8901
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl" />
              <Card className="relative bg-slate-900/50 backdrop-blur-sm border-slate-700 rounded-3xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Στείλτε μας Μήνυμα</h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Όνομα</label>
                        <Input
                          className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-cyan-500"
                          placeholder="Το όνομά σας"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Επώνυμο</label>
                        <Input
                          className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-cyan-500"
                          placeholder="Το επώνυμό σας"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                      <Input
                        type="email"
                        className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-cyan-500"
                        placeholder="email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Τηλέφωνο</label>
                      <Input
                        className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-cyan-500"
                        placeholder="+30 210 123 4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Μήνυμα</label>
                      <Textarea
                        className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-cyan-500"
                        placeholder="Περιγράψτε την ανάγκη σας..."
                        rows={4}
                      />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0">
                      Αποστολή Μηνύματος
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                  <Snowflake className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    FrostTech
                  </h3>
                  <p className="text-xs text-slate-400">Ψυκτικά Συστήματα</p>
                </div>
              </div>
              <p className="text-slate-400">
                Ειδικοί στις ψυκτικές εγκαταστάσεις με τεχνολογία αιχμής και 15+ χρόνια εμπειρίας.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Υπηρεσίες</h4>
              <ul className="space-y-2 text-slate-400">
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Κλιματιστικά</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Ψυκτικοί Θάλαμοι</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Συντήρηση</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Επείγουσα Υποστήριξη</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Επικοινωνία</h4>
              <ul className="space-y-2 text-slate-400">
                <li>+30 210 123 4567</li>
                <li>info@frosttech.gr</li>
                <li>Κηφισίας 123, Μαρούσι</li>
                <li>Αθήνα, Ελλάδα</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Ωράριο</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Δευτέρα - Παρασκευή</li>
                <li>8:00 - 18:00</li>
                <li>Σάββατο: 9:00 - 15:00</li>
                <li className="text-cyan-400">Επείγοντα: 24/7</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 FrostTech. Όλα τα δικαιώματα διατηρούνται. - Made By StV</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
