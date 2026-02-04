import { useState} from 'react';
import { FaLock } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa6";

const Contribution = () => {
const [selectedAmount, setSelectedAmount] = useState(20);
  const [customAmount, setCustomAmount] = useState('');
  const [activeTab, setActiveTab] = useState('online');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isAnonymous, setIsAnonymous] = useState(false)
  const presetAmounts = [100, 200, 300, 400];
  const [currency, setCurrency] = useState('KSH');

  return (
    <div id="contribution" className='min-h-screen w-full overflow-hidden'>
      <div className='relative h-64 md:h-80 lg:h-96'>

  <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(img/donate.jpg)'}}>
  <div className='absolute inset-0 bg-black-50'></div>
  </div>
 <div className="relative z-10 flex items-center justify-center h-full">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase">
      Make a Donation
    </h1>
  </div>
</div>
 <div className="bg-blue-700 py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left: Image */}
          <div className="flex justify-center lg:justify-start">
            <img 
              src="img/logo.jpeg"
              alt="Children" 
              className="rounded-lg w-full max-w-sm object-cover"
            />
          </div>

          {/* Middle: Campaign Info */}
          <div className="text-white space-y-4">
            <p className="text-sm font-medium tracking-wider opacity-90">
              YOU ARE DONATING TO:
            </p>
            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
              Helping kenya become a prosperous state.
            </h2>
            <p className="text-3xl font-bold">
              $45,288.00
            </p>
            
            {/* Progress Bar */}
            <div className="w-full bg-blue-900 rounded-full h-2 overflow-hidden">
              <div className="bg-green-400 h-full" style={{width: '150%'}}></div>
            </div>
            
            {/* Progress Info */}
            <div className="flex justify-between items-center text-sm">
              <span className="font-semibold">150% Donated</span>
              <span className="opacity-90">Goal: $30,000.00</span>
            </div>
          </div>

          {/* Right: Donation Amount Card */}
          <div className="bg-white rounded-lg p-6 lg:p-8 shadow-xl">
           <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Select Currency</label>
            <select
             value={currency}
             onChange={(e) => setCurrency(e.target.value)}
             className="w-full border-2 border-gray-300 rounded py-3 px-4 text-gray-700 focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
             >
              <option value="KSH">Ksh</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              </select>
            </div>

            
            {/* Preset Amounts */}
            <div className="grid grid-cols-2 gap-3 mb-4">
            {presetAmounts.map((amount) => (
              <button
              key={amount}
              onClick={() => {
                setSelectedAmount(amount);
                setCustomAmount('');
              }}
              className={`font-bold py-3 px-6 rounded border-2 transition-colors duration-200 ${
                selectedAmount === amount && !customAmount
                ? 'bg-blue-700 text-white border-blue-700'
                : 'border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white'
              }`}
              >
                {currency} {amount}
                 </button>
                ))}

            </div>
            
            {/* Custom Amount */}
            <input 
              type="text"
              placeholder={`Other Amount (${currency})`}
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                setSelectedAmount(null);
              }}
              className="w-full border-2 border-gray-300 rounded py-3 px-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
            />
          </div>
        </div>
      </div>

      {/* White Payment Section */}
      <div className="bg-gray-50 py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          {/* Donation Tabs */}
          <div className="flex border-b border-gray-300 mb-8">
            <button 
              onClick={() => setActiveTab('online')}
              className={`flex-1 py-4 px-6 font-semibold border-b-4 transition-all duration-200 ${
                activeTab === 'online'
                  ? 'text-blue-700 border-blue-700 bg-white'
                  : 'text-gray-600 border-transparent hover:text-blue-700 hover:bg-gray-100'
              }`}
            >
              Donate Online
            </button>
            <button 
              onClick={() => setActiveTab('offline')}
              className={`flex-1 py-4 px-6 font-semibold border-b-4 transition-all duration-200 ${
                activeTab === 'offline'
                  ? 'text-blue-700 border-blue-700 bg-white'
                  : 'text-gray-600 border-transparent hover:text-blue-700 hover:bg-gray-100'
              }`}
            >
              Donate Offline
            </button>
          </div>

          {/* Online Payment Form */}
          {activeTab === 'online' && (
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8 space-y-8">
              {/* Payment Methods */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Select Payment Method
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <button 
                    onClick={() => setPaymentMethod('card')}
                    className={`flex flex-col items-center justify-center p-4 border-2 rounded-lg transition-all duration-200 ${
                      paymentMethod === 'card'
                        ? 'border-blue-700 bg-blue-50'
                        : 'border-gray-300 hover:border-blue-700 hover:bg-blue-50'
                    }`}
                  >
                   <div className="flex gap-2 mb-2">
                    <img src="img/master-card.png" alt="Mastercard" className="h-6 w-auto object-contain" />
                    <img src="img/visa.png" alt="Visa" className="h-8 w-auto object-contain" />
                    </div>
                    <span className={`text-sm font-medium ${
                      paymentMethod === 'card' ? 'text-blue-700' : 'text-gray-700'
                    }`}>
                      Credit/Debit Card
                    </span>
                  </button>

                  <button 
                    onClick={() => setPaymentMethod('mpesa')}
                    className={`flex flex-col bg-green-600 items-center justify-center p-4 border-2 rounded-lg transition-all duration-200 ${
                      paymentMethod === 'mpesa'
                        ? 'border-blue-700 bg-blue-50'
                        : 'border-gray-300 hover:border-blue-700 hover:bg-blue-50'
                    }`}
                  >
                    <div className="h-8 mb-2 flex items-center">
                        <img 
                        src="img/mpesa.png" 
                        alt="M-Pesa Logo" 
                         className="h-8 w-auto object-contain"
                         />
                         </div>
                    <span className={`text-sm font-medium ${
                      paymentMethod === 'mpesa' ? 'text-blue-700' : 'text-gray-700'
                    }`}>
                      M-Pesa
                    </span>
                  </button>

                  <button 
                    onClick={() => setPaymentMethod('paypal')}
                    className={`flex flex-col items-center bg-blue-400 justify-center p-4 border-2 rounded-lg transition-all duration-200 ${
                      paymentMethod === 'paypal'
                        ? 'border-blue-700 bg-blue-50'
                        : 'border-gray-300 hover:border-blue-700 hover:bg-blue-50'
                    }`}
                  >
                    <div 
                    className="h-8 w-20 mb-2 bg-contain bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg')"
                    }}
                    >
                        
                    </div>
                    <span className={`text-sm font-medium ${
                      paymentMethod === 'paypal' ? 'text-blue-700' : 'text-gray-700'
                    }`}>
                      PayPal
                    </span>
                  </button>

                  <button 
                    onClick={() => setPaymentMethod('bank')}
                    className={`flex flex-col items-center justify-center p-4 border-2 rounded-lg transition-all duration-200 ${
                      paymentMethod === 'bank'
                        ? 'border-blue-700 bg-blue-50'
                        : 'border-gray-300 hover:border-blue-700 hover:bg-blue-50'
                    }`}
                  >
                    <div className="h-8 w-8 mb-2 text-2xl">🏦</div>
                    <span className={`text-sm font-medium ${
                      paymentMethod === 'bank' ? 'text-blue-700' : 'text-gray-700'
                    }`}>
                      Bank Transfer
                    </span>
                  </button>
                </div>
              </div>

              {/* Card Payment Form */}
              {paymentMethod === 'card' && (
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">
                    Card Information
                  </h4>
                  <input 
                    type="text"
                    placeholder="Card Number"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input 
                      type="text"
                      placeholder="MM/YY"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-200 transition-all"
                    />
                    <input 
                      type="text"
                      placeholder="CVV"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-200 transition-all"
                    />
                  </div>
                  <input 
                    type="text"
                    placeholder="Cardholder Name"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-200 transition-all"
                  />
                  <div className="flex items-center gap-3 pt-2">
                    <span className="text-sm text-gray-600">Accepted cards:</span>
                    <div className="flex gap-2">
                        <img src="img/master-card.png" alt="Mastercard" className="h-6 w-auto object-contain" />
                        <img src="img/visa.png" alt="Visa" className="h-6 w-auto object-contain" />
                        <img src="img/american-express.png" alt="American Express" className="h-6 w-auto object-contain" />
                        </div>
                        </div>
                </div>
              )}

              {/* M-Pesa Form */}
              {paymentMethod === 'mpesa' && (
                <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">
                        M-Pesa Details
                         </h4>
                    <input 
                    type="tel"
                    placeholder="Phone Number (e.g., 254712345678)"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-200 transition-all"
                    />
                    <p className="text-sm text-gray-600 bg-blue-50 p-3 rounded border-l-4 border-blue-700 flex items-start gap-2">
                        <FaLightbulb className="text-blue-700 mt-0.5 flex-shrink-0" />
                        <span>You will receive a prompt on your phone to complete payment</span>
                        </p>
                    </div>
              )}

              {/* PayPal */}
              {paymentMethod === 'paypal' && (
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">
                    PayPal Payment
                  </h4>
                   <p className="text-sm text-gray-600 bg-blue-50 p-3 rounded border-l-4 border-blue-700 flex items-start gap-2">
                        <FaLightbulb className="text-blue-700 mt-0.5 flex-shrink-0" />
                        <span>You will receive a prompt on your phone to complete payment</span>
                        </p>
                </div>
              )}

              {/* Bank Transfer */}
              {paymentMethod === 'bank' && (
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">
                    Bank Transfer
                  </h4>
                  <input 
                    type="text"
                    placeholder="Account Holder Name"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-200 transition-all"
                  />
                  <input 
                    type="text"
                    placeholder="Bank Name"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-200 transition-all"
                  />
                  <input 
                    type="text"
                    placeholder="Account Number"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-200 transition-all"
                  />
                </div>
              )}

              {/* Personal Information */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  Personal Information
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="text"
                    placeholder="First Name*"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-200 transition-all"
                  />
                  <input 
                    type="text"
                    placeholder="Last Name*"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-200 transition-all"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="email"
                    placeholder="Email*"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-200 transition-all"
                  />
                  <input 
                    type="tel"
                    placeholder="Phone*"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-200 transition-all"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input 
                    type="checkbox"
                    id="anonymous"
                    checked={isAnonymous}
                    onChange={(e) => setIsAnonymous(e.target.checked)}
                    className="mt-1 h-5 w-5 text-blue-700 border-gray-300 rounded focus:ring-2 focus:ring-blue-200"
                  />
                  <label htmlFor="anonymous" className="text-sm text-gray-700 cursor-pointer">
                    Donate anonymously
                  </label>
                </div>
              </div>

              {/* Donate Button */}
              <button className="w-full bg-blue-700 text-white font-bold py-4 px-6 rounded-lg hover:bg-blue-800 active:bg-blue-900 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl">
                Donate Now -{currency} {customAmount || selectedAmount || 0}
              </button>

              {/* Security Badge */}
              <div className="flex items-center justify-center gap-2 pt-4 border-t border-gray-200">
                <span className="text-2xl"><FaLock /></span>
                <p className="text-sm text-gray-600">
                  Secure payment encrypted with SSL
                </p>
              </div>
            </div>
          )}

          {/* Offline Payment Section */}
          {activeTab === 'offline' && (
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8 space-y-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Bank Transfer Details
              </h3>
              
              <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200 space-y-3">
                <p className="text-gray-700">
                  Bank name: <strong className="text-gray-900">Center London Bank</strong>
                </p>
                <p className="text-gray-700">
                  Account Number: <strong className="text-gray-900">4455-4445-333</strong>
                </p>
                <p className="text-gray-700">
                  Swift Code: <strong className="text-gray-900">XXCCVV</strong>
                </p>
              </div>
              
              <p className="text-sm text-gray-600 italic">
                * By clicking the donate button, your record will be stored in our database as pending transaction. After your payment is verified, we will send a receipt to your email.
              </p>
              
              <button className="w-full bg-blue-700 text-white font-bold py-4 px-6 rounded-lg hover:bg-blue-800 transition-all duration-200 shadow-lg">
                Confirm Offline Donation
              </button>
            </div>
          )}
        </div>
      </div>
  
    </div>



  );
};

export default Contribution;