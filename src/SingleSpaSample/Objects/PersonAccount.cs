﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace TV.SingleSpaSample
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Person account.
    /// </summary>
    // *** Start programmer edit section *** (PersonAccount CustomAttributes)

    // *** End programmer edit section *** (PersonAccount CustomAttributes)
    [AutoAltered()]
    [Caption("Person account")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("PersonAccountE", new string[] {
            "AccountId as \'Account id\'",
            "SocialNetwork as \'Social network\'",
            "SocialNetwork.Name as \'Name\'"}, Hidden=new string[] {
            "SocialNetwork.Name"})]
    [MasterViewDefineAttribute("PersonAccountE", "SocialNetwork", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Name")]
    public class PersonAccount : ICSSoft.STORMNET.DataObject
    {
        
        private string fAccountId;
        
        private TV.SingleSpaSample.SocialNetwork fSocialNetwork;
        
        private TV.SingleSpaSample.Person fPerson;
        
        // *** Start programmer edit section *** (PersonAccount CustomMembers)

        // *** End programmer edit section *** (PersonAccount CustomMembers)

        
        /// <summary>
        /// AccountId.
        /// </summary>
        // *** Start programmer edit section *** (PersonAccount.AccountId CustomAttributes)

        // *** End programmer edit section *** (PersonAccount.AccountId CustomAttributes)
        [StrLen(255)]
        public virtual string AccountId
        {
            get
            {
                // *** Start programmer edit section *** (PersonAccount.AccountId Get start)

                // *** End programmer edit section *** (PersonAccount.AccountId Get start)
                string result = this.fAccountId;
                // *** Start programmer edit section *** (PersonAccount.AccountId Get end)

                // *** End programmer edit section *** (PersonAccount.AccountId Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (PersonAccount.AccountId Set start)

                // *** End programmer edit section *** (PersonAccount.AccountId Set start)
                this.fAccountId = value;
                // *** Start programmer edit section *** (PersonAccount.AccountId Set end)

                // *** End programmer edit section *** (PersonAccount.AccountId Set end)
            }
        }
        
        /// <summary>
        /// Person account.
        /// </summary>
        // *** Start programmer edit section *** (PersonAccount.SocialNetwork CustomAttributes)

        // *** End programmer edit section *** (PersonAccount.SocialNetwork CustomAttributes)
        [PropertyStorage(new string[] {
                "SocialNetwork"})]
        [NotNull()]
        public virtual TV.SingleSpaSample.SocialNetwork SocialNetwork
        {
            get
            {
                // *** Start programmer edit section *** (PersonAccount.SocialNetwork Get start)

                // *** End programmer edit section *** (PersonAccount.SocialNetwork Get start)
                TV.SingleSpaSample.SocialNetwork result = this.fSocialNetwork;
                // *** Start programmer edit section *** (PersonAccount.SocialNetwork Get end)

                // *** End programmer edit section *** (PersonAccount.SocialNetwork Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (PersonAccount.SocialNetwork Set start)

                // *** End programmer edit section *** (PersonAccount.SocialNetwork Set start)
                this.fSocialNetwork = value;
                // *** Start programmer edit section *** (PersonAccount.SocialNetwork Set end)

                // *** End programmer edit section *** (PersonAccount.SocialNetwork Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку TV.SingleSpaSample.Person.
        /// </summary>
        // *** Start programmer edit section *** (PersonAccount.Person CustomAttributes)

        // *** End programmer edit section *** (PersonAccount.Person CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "Person"})]
        public virtual TV.SingleSpaSample.Person Person
        {
            get
            {
                // *** Start programmer edit section *** (PersonAccount.Person Get start)

                // *** End programmer edit section *** (PersonAccount.Person Get start)
                TV.SingleSpaSample.Person result = this.fPerson;
                // *** Start programmer edit section *** (PersonAccount.Person Get end)

                // *** End programmer edit section *** (PersonAccount.Person Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (PersonAccount.Person Set start)

                // *** End programmer edit section *** (PersonAccount.Person Set start)
                this.fPerson = value;
                // *** Start programmer edit section *** (PersonAccount.Person Set end)

                // *** End programmer edit section *** (PersonAccount.Person Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "PersonAccountE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View PersonAccountE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("PersonAccountE", typeof(TV.SingleSpaSample.PersonAccount));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of PersonAccount.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfPersonAccount CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfPersonAccount CustomAttributes)
    public class DetailArrayOfPersonAccount : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (TV.SingleSpaSample.DetailArrayOfPersonAccount members)

        // *** End programmer edit section *** (TV.SingleSpaSample.DetailArrayOfPersonAccount members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type PersonAccount by index.
        /// </summary>
        /// <summary>
        /// Adds object with type PersonAccount.
        /// </summary>
        public DetailArrayOfPersonAccount(TV.SingleSpaSample.Person fPerson) : 
                base(typeof(PersonAccount), ((ICSSoft.STORMNET.DataObject)(fPerson)))
        {
        }
        
        public TV.SingleSpaSample.PersonAccount this[int index]
        {
            get
            {
                return ((TV.SingleSpaSample.PersonAccount)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(TV.SingleSpaSample.PersonAccount dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
