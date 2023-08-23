import { useState } from 'react';
import cn from 'classnames';
import { NextSeo } from 'next-seo';
import { Transition } from '@/components/ui/transition';
import { Listbox } from '@/components/ui/listbox';
import Image from '@/components/ui/image';
import Button from '@/components/ui/button';
import Input from '@/components/ui/forms/input';
import Textarea from '@/components/ui/forms/textarea';
import InputLabel from '@/components/ui/input-label';
import ToggleBar from '@/components/ui/toggle-bar';
import { ChevronDown } from '@/components/icons/chevron-down';
import { Unlocked } from '@/components/icons/unlocked';
// images
import NFT1 from '@/assets/images/nft/nft-1.jpg';

const BlockchainOptions = [
  {
    id: 1,
    name: 'Ethereum',
    value: 'ethereum',
    icon: <Ethereum />,
  },
  {
    id: 2,
    name: 'Flow',
    value: 'flow',
    icon: <Flow />,
  },
];

export default function CreateNFT() {
  let [publish, setPublish] = useState(true);
  let [explicit, setExplicit] = useState(false);
  let [unlocked, setUnlocked] = useState(false);
  let [priceType, setPriceType] = useState('fixed');
  let [blockchain, setBlockChain] = useState(BlockchainOptions[0]);
  let [cpus, setCPUs] = useState('');
  let [ram, setRAM] = useState('');
  let [storage, setStorage] = useState('');
  let [selectedRegion, setSelectedRegion] = useState('');

  return (
    <>
      <NextSeo
        title="Launch"
        description="GPU-Enabled Jupyter Notebook Deployment Platform"
      />
      <div className="mx-auto w-full sm:pt-0 lg:px-8 xl:px-10 2xl:px-0">
        <h2 className="mb-6 text-lg font-medium uppercase tracking-wider text-gray-900 dark:text-white sm:mb-10 sm:text-2xl">
          Create New Deployment
        </h2>
        <div className="mb-8 grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {/* File uploader */}
            <div className="mb-8">
              <InputLabel title="Upload file" important />
              {/* Replace with your Uploader component */}
            </div>
            
            {/* Price */}
            <div className="mb-8">
              <InputLabel title="Price Range" important />
              <Input
                min={0}
                type="number"
                placeholder="Enter your price range"
                inputClassName="spin-button-hidden"
              />
            </div>

            {/* Name */}
            <div className="mb-8">
              <InputLabel title="Name" important />
              <Input type="text" placeholder="Item name" />
            </div>

            {/* Description */}
            <div className="mb-8">
              <InputLabel
                title="Description"
                subTitle="The description will be included on the deployment's detail page."
              />
              <Textarea placeholder="Provide a detailed description of your deployment" />
            </div>

            {/* CPUs */}
            <div className="mb-4">
              <InputLabel title="CPUs" important />
              <Input type="number" placeholder="Enter number of CPUs" onChange={(e) => setCPUs(e.target.value)} />
            </div>

            <div className="mb-4">
  <InputLabel title="RAM" important />
  <div className="flex items-center space-x-2">
    <Input type="number" placeholder="Enter RAM" onChange={(e) => setRAM(e.target.value)} />
    <Dropdown options={['GB', 'MB']} selectedOption={selectedRAMUnit} onSelect={handleRAMUnitSelect} />
  </div>
</div>

<div className="mb-4">
  <InputLabel title="Storage" important />
  <div className="flex items-center space-x-2">
    <Input type="number" placeholder="Enter storage" onChange={(e) => setStorage(e.target.value)} />
    <Dropdown options={['GB', 'TB']} selectedOption={selectedStorageUnit} onSelect={handleStorageUnitSelect} />
  </div>
</div>

<div className="mb-4">
  <InputLabel title="Region" important />
  <Dropdown options={['Region A', 'Region B', 'Region C']} selectedOption={selectedRegion} onSelect={handleRegionSelect} />
</div>


        <Button shape="rounded">CREATE</Button>
      </div>
    </>
  );
}
