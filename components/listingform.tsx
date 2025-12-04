import React, { useState } from 'react';
import { useFormik, Field, FormikProvider } from 'formik';
import * as Yup from 'yup';
import { AlertCircle, CheckCircle2, Upload, X, Image as ImageIcon } from 'lucide-react';

interface WasteFormValues {
  wasteType: string;
  quantity: string;
  unit: string;
  description: string;
  location: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  hazardous: boolean;
  images: File[];
}

const validationSchema = Yup.object({
  wasteType: Yup.string()
    .required('Waste type is required'),
  quantity: Yup.number()
    .required('Quantity is required')
    .positive('Quantity must be greater than 0')
    .typeError('Quantity must be a number'),
  unit: Yup.string()
    .required('Unit is required'),
  description: Yup.string()
    .required('Description is required')
    .min(10, 'Description must be at least 10 characters'),
  location: Yup.string()
    .required('Location is required')
    .min(3, 'Location must be at least 3 characters'),
  contactName: Yup.string()
    .required('Contact name is required')
    .min(2, 'Name must be at least 2 characters'),
  contactEmail: Yup.string()
    .required('Email is required')
    .email('Invalid email format'),
  contactPhone: Yup.string()
    .required('Phone number is required')
    .matches(/^[0-9\s\-\+\(\)]+$/, 'Invalid phone number format'),
  hazardous: Yup.boolean(),
  images: Yup.array()
    .max(5, 'Maximum 5 images allowed')
});

export default function WasteListingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  const wasteTypes = [
    'Organic Waste',
    'Plastic',
    'Metal',
    'Glass',
    'Paper/Cardboard',
    'Electronic Waste',
    'Construction Debris',
    'Textile',
    'Other',
  ];

  const units = ['kg', 'tons', 'cubic meters', 'pieces'];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
  const files =  e.target.files;
  if (!files) return;
  const fileArray = Array.from(files);
  const currentImages = formik.values.images;
  if (currentImages.length + fileArray.length > 5) {
    formik.setFieldError(
      "images",
      "You can only upload a maximum of 5 images."
    );
    return;
  }

  
  formik.setFieldError("images", "");
  const previewUrls = fileArray.map((file) => URL.createObjectURL(file));
  setImagePreviews((prev) => [...prev, ...previewUrls]);

  formik.setFieldValue("images", [...currentImages, ...fileArray]);
  console.log('Uploaded images:', formik.values.images);
  console.log('Image previews:', imagePreviews);
};


  const formik = useFormik<WasteFormValues>({
    initialValues: {
      wasteType: '',
      quantity: '',
      unit: 'kg',
      description: '',
      location: '',
      contactName: '',
      contactEmail: '',
      contactPhone: '',
      hazardous: false,
      images: [],
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('Form submitted:', values);
      console.log('Number of images:', values.images.length);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setImagePreviews([]);
        formik.resetForm();
      }, 3000);
    },
  });

  return (
        
      <div className=" w-[90%] mt-5 mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="mb-8">
            <h1 className=" text-[15px] md:text-3xl font-bold text-gray-900 mb-2">Waste Listing Form</h1>
            <p className="text-gray-600">Submit details about waste materials available for recycling or disposal</p>
          </div>

          {submitted && (
            <div className="mb-6 bg-white border border-green-200 rounded-lg p-4 flex items-start gap-3">
              <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={20} />
              <div>
                <h3 className="font-semibold text-green-900">Successfully Submitted!</h3>
                <p className="text-sm text-green-700">Your waste listing has been recorded.</p>
              </div>
            </div>
          )}

          <FormikProvider value={formik}>
            <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="wasteType" className="block text-sm font-medium text-gray-700 mb-2">
                  Waste Type *
                </label>
                <Field
                  as="select"
                  id="wasteType"
                  name="wasteType"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Select waste type</option>
                  {wasteTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </Field>
                {formik.touched.wasteType && formik.errors.wasteType && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle size={14} /> {formik.errors.wasteType}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="quantity" className="block text-[12px]  font-medium text-gray-700 mb-2">
                    Quantity *
                  </label>
                  <Field
                    type="number"
                    id="quantity"
                    name="quantity"
                    step="0.01"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  {formik.touched.quantity && formik.errors.quantity && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle size={14} /> {formik.errors.quantity}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="unit" className="block text-sm font-medium text-gray-700 mb-2">
                    Unit *
                  </label>
                  <Field
                    as="select"
                    id="unit"
                    name="unit"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    {units.map(unit => (
                      <option key={unit} value={unit}>{unit}</option>
                    ))}
                  </Field>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Description *
              </label>
              <Field
                as="textarea"
                id="description"
                name="description"
                rows={4}
                placeholder="Provide details about the waste material, its condition, and any special handling requirements"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
              />
              {formik.touched.description && formik.errors.description && (
                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle size={14} /> {formik.errors.description}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                Location *
              </label>
              <Field
                type="text"
                id="location"
                name="location"
                placeholder="City, State/Region, Country"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              {formik.touched.location && formik.errors.location && (
                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle size={14} /> {formik.errors.location}
                </p>
              )}
            </div>

            <div className="flex items-center gap-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <Field
                type="checkbox"
                id="hazardous"
                name="hazardous"
                className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
              />
              <label htmlFor="hazardous" className="text-sm font-medium text-gray-900">
                This waste material is hazardous or requires special handling
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Images 
              </label>
              <p className="text-xs text-gray-500 mb-3">
                Upload up to 5 images. Accepted formats: JPEG, PNG, WebP. Max size: 5MB per image.
              </p>
  
              <div className="space-y-4">
                {/* Upload Button */}
                {formik.values.images.length < 5 && (
                  <div className="relative">
                    <input
                      type="file"
                      id="images"
                      name="images"
                      accept="image/jpeg,image/jpg,image/png,image/webp"
                      multiple
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    <label
                      htmlFor="images"
                      className="flex items-center justify-center gap-2 w-full px-4 py-8 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-green-500 hover:bg-green-50 transition-colors"
                    >
                      <Upload size={24} className="text-gray-400" />
                      <span className="text-sm font-medium text-gray-600">
                        Click to upload images
                      </span>
                    </label>
                  </div>
                )}

                {/* Image Previews */}
                {imagePreviews.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                    
                    {formik.values.images.map((file, index) => (
                      <div key={index} className="relative group">
                        <img src={URL.createObjectURL(file)} alt={`Preview ${index + 1}`} className="w-full h-auto rounded-lg" />
                      </div>
                    ))}

                  </div>
                )}

              

                {/* Error Message */}
                {formik.errors.images && typeof formik.errors.images === 'string' && (
                  <p className="text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle size={14} /> {formik.errors.images}
                  </p>
                )}
              </div>
            </div>

            <div className="border-t pt-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h2>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <Field
                    type="text"
                    id="contactName"
                    name="contactName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  {formik.touched.contactName && formik.errors.contactName && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle size={14} /> {formik.errors.contactName}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Field
                      type="email"
                      id="contactEmail"
                      name="contactEmail"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                    {formik.touched.contactEmail && formik.errors.contactEmail && (
                      <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle size={14} /> {formik.errors.contactEmail}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contactPhone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <Field
                      type="tel"
                      id="contactPhone"
                      name="contactPhone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                    {formik.touched.contactPhone && formik.errors.contactPhone && (
                      <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle size={14} /> {formik.errors.contactPhone}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-6">
              <button
                type="button"
                onClick={() => formik.handleSubmit()}
                disabled={formik.isSubmitting}
                className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors focus:ring-4 focus:ring-green-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formik.isSubmitting ? 'Submitting...' : 'Submit Listing'}
              </button>
              <button
                type="button"
                onClick={() => {
                  setImagePreviews([]);
                  formik.resetForm();
                }}
                className="px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Reset
              </button>
            </div>
                      </div>
          </FormikProvider>
        </div>
      </div>
    
  );
}