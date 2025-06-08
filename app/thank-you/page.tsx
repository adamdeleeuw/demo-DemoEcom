import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Package, Truck } from "lucide-react"

export default function ThankYouPage() {
  const orderNumber = "DE" + Math.random().toString(36).substr(2, 9).toUpperCase()

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Thank You for Your Order!</h1>
          <p className="text-gray-600 text-lg">Your order has been successfully placed and is being processed.</p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Order Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-medium">Order Number:</span>
              <span className="font-bold text-lg">#{orderNumber}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Estimated Delivery:</span>
              <span>3-5 business days</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Shipping Method:</span>
              <span>Standard Shipping (Free)</span>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Package className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Order Confirmation</h3>
              <p className="text-sm text-gray-600">
                You'll receive an email confirmation shortly with your order details.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Truck className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Shipping Updates</h3>
              <p className="text-sm text-gray-600">We'll send you tracking information once your order ships.</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <Link href="/shop">
            <Button size="lg" className="bg-black hover:bg-gray-800 mr-4">
              Continue Shopping
            </Button>
          </Link>
          <Link href="/">
            <Button variant="outline" size="lg">
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h3 className="font-semibold mb-2">Need Help?</h3>
          <p className="text-gray-600 mb-4">
            If you have any questions about your order, please don't hesitate to contact us.
          </p>
          <Button variant="outline">Contact Support</Button>
        </div>
      </div>
    </div>
  )
}
