using System.Collections.Generic;
using System.Text;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace AetherWord.Core.UnitTests
{
    [TestClass]
    public class Pbkdf2Sha256Tests
    {
        [TestMethod]
        public void StandardTestVectors_Pbkdf2Sha256GetBytes_MatchExpectedOutputs()
        {
            // Arrange
            var testVectors = new List<Pbkdf2TestVectors>
            {
                new Pbkdf2TestVectors
                {
                    Password = "password",
                    Salt = "salt",
                    IterationCount = 1,
                    DerivedKeyLength = 32,
                    ExpectedResultBytes = new byte[]
                    {
                        0x12, 0x0f, 0xb6, 0xcf, 0xfc, 0xf8, 0xb3, 0x2c,
                        0x43, 0xe7, 0x22, 0x52, 0x56, 0xc4, 0xf8, 0x37,
                        0xa8, 0x65, 0x48, 0xc9, 0x2c, 0xcc, 0x35, 0x48,
                        0x08, 0x05, 0x98, 0x7c, 0xb7, 0x0b, 0xe1, 0x7b,
                    }
                },
                new Pbkdf2TestVectors
                {
                    Password = "password",
                    Salt = "salt",
                    IterationCount = 2,
                    DerivedKeyLength = 32,
                    ExpectedResultBytes = new byte[]
                    {
                        0xae, 0x4d, 0x0c, 0x95, 0xaf, 0x6b, 0x46, 0xd3,
                        0x2d, 0x0a, 0xdf, 0xf9, 0x28, 0xf0, 0x6d, 0xd0,
                        0x2a, 0x30, 0x3f, 0x8e, 0xf3, 0xc2, 0x51, 0xdf,
                        0xd6, 0xe2, 0xd8, 0x5a, 0x95, 0x47, 0x4c, 0x43,
                    }
                },
                new Pbkdf2TestVectors
                {
                    Password = "password",
                    Salt = "salt",
                    IterationCount = 4096,
                    DerivedKeyLength = 32,
                    ExpectedResultBytes = new byte[]
                    {
                        0xc5, 0xe4, 0x78, 0xd5, 0x92, 0x88, 0xc8, 0x41,
                        0xaa, 0x53, 0x0d, 0xb6, 0x84, 0x5c, 0x4c, 0x8d,
                        0x96, 0x28, 0x93, 0xa0, 0x01, 0xce, 0x4e, 0x11,
                        0xa4, 0x96, 0x38, 0x73, 0xaa, 0x98, 0x13, 0x4a,
                    }
                },
                new Pbkdf2TestVectors
                {
                    Password = "password",
                    Salt = "salt",
                    IterationCount = 16777216,
                    DerivedKeyLength = 32,
                    ExpectedResultBytes = new byte[]
                    {
                        0xcf, 0x81, 0xc6, 0x6f, 0xe8, 0xcf, 0xc0, 0x4d,
                        0x1f, 0x31, 0xec, 0xb6, 0x5d, 0xab, 0x40, 0x89,
                        0xf7, 0xf1, 0x79, 0xe8, 0x9b, 0x3b, 0x0b, 0xcb,
                        0x17, 0xad, 0x10, 0xe3, 0xac, 0x6e, 0xba, 0x46,
                    }
                },
                new Pbkdf2TestVectors
                {
                    Password = "passwordPASSWORDpassword",
                    Salt = "saltSALTsaltSALTsaltSALTsaltSALTsalt",
                    IterationCount = 4096,
                    DerivedKeyLength = 40,
                    ExpectedResultBytes = new byte[]
                    {
                        0x34, 0x8c, 0x89, 0xdb, 0xcb, 0xd3, 0x2b, 0x2f,
                        0x32, 0xd8, 0x14, 0xb8, 0x11, 0x6e, 0x84, 0xcf,
                        0x2b, 0x17, 0x34, 0x7e, 0xbc, 0x18, 0x00, 0x18,
                        0x1c, 0x4e, 0x2a, 0x1f, 0xb8, 0xdd, 0x53, 0xe1,
                        0xc6, 0x35, 0x51, 0x8c, 0x7d, 0xac, 0x47, 0xe9,
                    }
                },
                new Pbkdf2TestVectors
                {
                    Password = "pass" + '\0' + "word",
                    Salt = "sa" + '\0' + "lt",
                    IterationCount = 4096,
                    DerivedKeyLength = 16,
                    ExpectedResultBytes = new byte[]
                    {
                        0x89, 0xb6, 0x9d, 0x05, 0x16, 0xf8, 0x29, 0x89,
                        0x3c, 0x69, 0x62, 0x26, 0x65, 0x0a, 0x86, 0x87,
                    }
                }
            };

            foreach (var testVector in testVectors)
            {
                // Act
                var result = Pbkdf2Sha256.Pbkdf2Sha256GetBytes(
                    testVector.DerivedKeyLength, 
                    Encoding.UTF8.GetBytes(testVector.Password), 
                    Encoding.UTF8.GetBytes(testVector.Salt), 
                    testVector.IterationCount
                );

                CollectionAssert.AreEqual(testVector.ExpectedResultBytes, result);
            }
        }
    }

    internal class Pbkdf2TestVectors
    {
        public string Password { get; set; }
        public string Salt { get; set; }
        public int IterationCount { get; set; }
        public int DerivedKeyLength { get; set; }
        public byte[] ExpectedResultBytes { get; set; }
    }
}
