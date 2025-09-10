import Link from 'next/link';
import { ContactForm } from '@/components/contact-form';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ConnectPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Join Our Community Section */}
      <section className="py-16">
        <div className="container relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Connect with fellow engineers, stay updated on events, and be part
              of our growing community.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="flex flex-col h-full">
              <CardHeader className="text-center">
                <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  {/* <MessageCircle className="h-8 w-8 text-secondary" /> */}
                </div>
                <CardTitle className="text-xl">Discord Community</CardTitle>
              </CardHeader>
              <CardContent className="text-center flex-1 flex flex-col">
                <p className="text-muted-foreground mb-6 flex-1">
                  Join our active Discord server for real-time discussions,
                  study groups, project collaboration, and community support.
                </p>
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  Join Discord
                </Button>
              </CardContent>
            </Card>

            <Card className="flex flex-col h-full">
              <CardHeader className="text-center">
                <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  {/* <Calendar className="h-8 w-8 text-secondary" /> */}
                </div>
                <CardTitle className="text-xl">Google Calendar</CardTitle>
              </CardHeader>
              <CardContent className="text-center flex-1 flex flex-col">
                <p className="text-muted-foreground mb-6 flex-1">
                  Subscribe to our Google Calendar to never miss an event. Get
                  automatic notifications for workshops, meetings, and socials.
                </p>
                <Button
                  variant="outline"
                  className="w-full mt-auto bg-transparent"
                >
                  Subscribe to Calendar
                </Button>
              </CardContent>
            </Card>

            <Card className="flex flex-col h-full">
              <CardHeader className="text-center">
                <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  {/* <Instagram className="h-8 w-8 text-accent-foreground" /> */}
                </div>
                <CardTitle className="text-xl">Instagram</CardTitle>
              </CardHeader>
              <CardContent className="text-center flex-1 flex flex-col">
                <p className="text-muted-foreground mb-6 flex-1">
                  Follow us for behind-the-scenes content, event highlights,
                  member spotlights, and IEEE TAMU updates.
                </p>
                <Button
                  variant="outline"
                  className="w-full mt-auto bg-transparent"
                >
                  Follow @ieee_tamu
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stay Connected Section */}
      {/* <section className="py-16 bg-card">
        <div className="container relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Follow us across all platforms to stay updated and engaged with
              our community.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Linkedin className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">LinkedIn</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Professional networking and career opportunities
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-transparent"
                >
                  Connect
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">Website</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Latest news, resources, and announcements
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-transparent"
                >
                  Visit Site
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Bell className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Newsletter</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Monthly updates and exclusive content
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-transparent"
                >
                  Subscribe
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold mb-2">GroupMe</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Quick updates and casual conversations
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-transparent"
                >
                  Join Group
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Get Involved Section */}
      {/* <section className="py-16">
        <div className="container relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
              <p className="text-muted-foreground">
                There are many ways to connect and contribute to our IEEE{' '}
                <span className="text-primary">TAMU</span> community.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Heart className="h-5 w-5 text-red-500" />
                    Volunteer Opportunities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Help organize events, mentor new members, or contribute to
                    community service projects. Volunteering is a great way to
                    develop leadership skills and make lasting connections.
                  </p>
                  <Button variant="outline" className="w-full bg-transparent">
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-secondary" />
                    Study Groups
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Join or create study groups for your courses. Connect with
                    peers in your major, share resources, and tackle challenging
                    projects together.
                  </p>
                  <Button variant="outline" className="w-full bg-transparent">
                    Find Groups
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section> */}

      {/* Send Us a Message Section */}
      <section className="py-16 bg-card">
        <div className="container relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
            <p className="text-muted-foreground">
              Have a question or suggestion? We&apos;d love to hear from you.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-muted-foreground mb-8">
                Whether you&apos;re a student interested in joining, a company
                looking to partner, or just have general questions, we&apos;re
                here to help.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    {/* <Mail className="h-6 w-6 text-primary" /> */}
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">
                      contact@ieeetamu.org
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    {/* <MapPin className="h-6 w-6 text-primary" /> */}
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-muted-foreground">
                      Weisenbaker Engineering Building
                      <br />
                      College Station, TX 77843
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold mb-4">Follow Us</h4>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="outline" size="sm">
                      LinkedIn
                    </Button>
                    <Button variant="outline" size="sm">
                      Instagram
                    </Button>
                    <Button variant="outline" size="sm">
                      Discord
                    </Button>
                    <Button variant="outline" size="sm">
                      Website
                    </Button>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold mb-4">Office Hours</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="text-muted-foreground">
                        9:00 AM - 5:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="text-muted-foreground">
                        10:00 AM - 2:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="text-muted-foreground">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards Section */}
      <section className="py-16 bg-card">
        <div className="container relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Quick Contact</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Need to reach a specific department? Use these direct contact
              methods for faster assistance.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-lg">General Inquiries</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Questions about IEEE TAMU, events, or general information.
                </p>
                <div className="space-y-2">
                  <p className="text-sm">
                    <Link
                      href="mailto:info@ieeetamu.org"
                      className="text-primary hover:underline"
                    >
                      info@ieeetamu.org
                    </Link>
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-transparent"
                  >
                    Send Message
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-lg">Membership</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Questions about joining IEEE TAMU or membership benefits.
                </p>
                <div className="space-y-2">
                  <p className="text-sm">
                    <Link
                      href="mailto:membership@ieeetamu.org"
                      className="text-primary hover:underline"
                    >
                      membership@ieeetamu.org
                    </Link>
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-transparent"
                  >
                    Join Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-lg">Sponsorship</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Corporate partnerships and sponsorship opportunities.
                </p>
                <div className="space-y-2">
                  <p className="text-sm">
                    <Link
                      href="mailto:sponsorship@ieeetamu.org"
                      className="text-primary hover:underline"
                    >
                      corporate@ieeetamu.org
                    </Link>
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-transparent"
                  >
                    Partner With Us
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
