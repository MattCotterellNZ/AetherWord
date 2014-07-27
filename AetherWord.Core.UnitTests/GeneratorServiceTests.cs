using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace AetherWord.Core.UnitTests
{
    [TestClass]
    public class GeneratorServiceTests
    {
        private GeneratorService _generatorService;

        [TestInitialize]
        public void Initialize()
        {
            _generatorService = new GeneratorService();
        }

        [TestMethod]
        public void SimpleParametersPassed_GetAetherWord_MatchesLegacyAppOutput()
        {
            // Arrange
            const string domain = "facebook.com";
            const string masterPassword = "testtesttesttest";
            const string expectedAetherWord = "s+q`-G&-c`WNdR@0k*>_";

            // Act
            var result = _generatorService.GetAetherWord(domain, masterPassword);

            // Assert
            Assert.AreEqual(result, expectedAetherWord);
        }

        [TestMethod]
        public void UnicodeParametersPassed_GetAetherWord_MatchesLegacyAppOutput()
        {
            // Arrange
            const string domain = "💩.la";
            const string masterPassword = "言語サポート";
            const string expectedAetherWord = "X&(?OTE,EUetu`gOdg(o";

            // Act
            var result = _generatorService.GetAetherWord(domain, masterPassword);

            // Assert
            Assert.AreEqual(result, expectedAetherWord);
        }
    }
}
