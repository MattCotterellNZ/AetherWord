using System.Text;

namespace AetherWord.Core
{
    public class GeneratorService
    {
        private readonly Ascii85 _ascii85Provider;

        public GeneratorService()
        {
            _ascii85Provider = new Ascii85 { EnforceMarks = false, LineLength = 0 };
        }
        
        public string GetAetherWord(string hostName, string masterPassword)
        {
            byte[] hostNameBytes = Encoding.UTF8.GetBytes(hostName);
            byte[] masterPasswordBytes = Encoding.UTF8.GetBytes(masterPassword);

            var aetherWordBytes = Pbkdf2Sha256.Pbkdf2Sha256GetBytes(16, masterPasswordBytes, hostNameBytes, 10000);

            return _ascii85Provider.Encode(aetherWordBytes);
        }
    }
}
